<?php
/**
 * @package ppp_popup
 * @version 1.0
 * 
 * Plugin Name: ppp_popup
 * Plugin URI: https://example.com
 * Description: I don't know
 * Version: 1.0
 * Author: :)
 */

function ppp_pop_col($columns)
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
add_filter( 'manage_posts_columns', 'ppp_pop_col' );

function show_ppp_pop_col($name) {
  global $post;
  switch ($name) {
    case 'restriction':
      $restriction = get_post_meta($post->ID, 'role', true);
      if (!$restriction) {
        echo '<a class="ppp-pop__edit" href="#" data-id="'.$post->ID.'" onClick="ppp_pop(this)">Unprotected <span class="dashicons dashicons-plus ppp-pop__add-btn"></span></a>';
      } else
        echo '<a class="ppp-pop__edit" href="#" data-id="'.$post->ID.'" onClick="ppp_pop(this)">'.$restriction.' <span class="dashicons dashicons-edit ppp-pop__edit-btn"></span></a>';
  }
}
// show restriction column content
add_action( 'manage_posts_custom_column' , 'show_ppp_pop_col');

// register script
function ppp_pop_script()
{
  wp_enqueue_script( 'ppp_pop_reactjs', plugins_url() ."/content-restriction/_dev_/dist/ppp-pop-bundle.js", array(), null, true );
  wp_enqueue_script( 'ppp_pop_script', plugins_url() ."/content-restriction/assets/js/ppp-pop.js", array(), null, true );
}
add_action( 'admin_enqueue_scripts', 'ppp_pop_script' );

function register_ppp_pop()
{
  add_action( 'admin_footer', 'insert_ppp_pop');
}
function insert_ppp_pop()
{
  echo '
    <!-- ppp popup area -->
    <div id="ppp-pop" class="ppp-p">
    </div>
    ';
}
// add content restriction popup to wp-footer
add_action( 'manage_posts_custom_column', 'register_ppp_pop' );