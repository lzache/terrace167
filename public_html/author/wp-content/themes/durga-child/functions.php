<?php


// called a hook- needs to be unique - if it matches Pfile it will error out
// prefix with theme name
// adding the 10 (default) gives them a priority (can be from 1-99, 1 being most important)
// this allows you to override bootstrap or other css classes
add_action('wp_enqueue_scripts', 'durgaChild_enqueue_styles', 10);

function durgaChild_enqueue_styles(){
    // remove a stylesheet
    // wp_dequeue_style('query-monitor');

    // get_template.. is the parent theme
    // get_stylesheet.. is the child theme
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');

    // put it back in
    // wp_enqueue_style('query-monitor');
}

//add_action("adverts_template_load", "durgaChild_adverts_override_templates");
/**
 * Loads WPAdverts templates from current theme or child-theme directory.
 *
 * By default WPAdverts loads templates from wpadverts/templates directory,
 * this function tries to load files from your current theme 'wpadverts'
 * directory for example wp-content/themes/twentytwelve/wpadverts.
 *
 * The function will look for templates in three places, if the template will
 * be found in fist one the other places are not being checked.

 * @param string $tpl Absolute path to template file
 * @return string
 */
//function durgaChild_adverts_override_templates( $tpl ) {
//
//    $dirs = array();
//    // first check in child-theme directory
//    $dirs[] = get_stylesheet_directory() . "/wpadverts/";
//    // next check in parent theme directory
//    $dirs[] = get_template_directory() . "/wpadverts/";
//    // if nothing else use default template
//    $dirs[] = ADVERTS_PATH . "/templates/";
//    // use absolute path in case the full path to the file was passed
//    $dirs[] = dirname( $tpl ) . '/';
//
//    $basename = basename( $tpl );
//
//    foreach($dirs as $dir) {
//        if( file_exists( $dir . $basename ) ) {
//            return $dir . $basename;
//        }
//    }
//}