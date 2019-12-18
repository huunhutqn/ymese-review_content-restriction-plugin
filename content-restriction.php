<?php
/**
 * @package Content_Restriction
 * @version 1.0
 * 
 * Plugin Name: Content Restriction
 * Plugin URI: https://example.com
 * Description: I don't know
 * Version: 1.0
 * Author: :)
 */

function cr_col($columns)
{
  // add restriction column
  $columns['restriction'] = 'Restriction';

  // reorder restriction stand before category
  $n_columns = array();
  $move = 'restriction'; // what to move
  $before = 'categories'; // move before this
  foreach ($columns as $key => $value) {
    if ($key == $before) {
      $n_columns[$move] = $move;
    }
      $n_columns[$key] = $value;
  }

  return $n_columns;
}
// register restriction colum
add_filter( 'manage_posts_columns', 'cr_col' );

function show_cr_col($name) {
  global $post;
  switch ($name) {
    case 'restriction':
      $restriction = get_post_meta($post->ID, 'role', true);
      if (!$restriction) {
        echo '<a class="cr__edit" href="#" data-id="'.$post->ID.'" onClick="cr(this)">Unprotected <span class="dashicons dashicons-plus cr__edit-icon"></span></a>';
      } else
        echo '<a class="cr__edit" href="#" data-id="'.$post->ID.'" onClick="cr(this)">'.$restriction.' <span class="dashicons dashicons-edit cr__edit-icon"></span></a>';
  }
}
// show restriction column content
add_action( 'manage_posts_custom_column' , 'show_cr_col');

// register script
function cr_script()
{
  wp_enqueue_script( 'cr_reactjs', plugins_url() ."/content-restriction/_dev_/dist/cr-bundle.js", array(), null, true );
  wp_enqueue_script( 'cr_script', plugins_url() ."/content-restriction/assets/js/content-restriction.js", array(), null, true );
}
add_action( 'admin_enqueue_scripts', 'cr_script' );

function register_cr_popup()
{
  add_action( 'admin_footer', 'insert_cr_popup');
}
function insert_cr_popup()
{
  echo '
    <!-- The Content Restriction plugin -->
    <div id="content-restriction" class="cr">
    </div>
    ';
}
// add content restriction popup to wp-footer
add_action( 'manage_posts_custom_column', 'register_cr_popup' );