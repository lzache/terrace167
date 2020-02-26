<?php
/**
 * This is the plugin bootstrap file
 *
 * @wordpress-plugin
 * Plugin Name: WPD Review Block
 * Description: The review block plugin
 * Author: Lauren Zache
 * Version: 1.0.0
 * Text Domain: review-block
 *
 */

class ReviewBlock {
    // attribute to hold single instance of this plugin
    private static $instance;

    // make the constructor private so it can't be called outside the class
    private function __construct() {
        add_shortcode('review', array($this, 'reviewShortcode'));

        // add_action('widget_init', array($this, 'widgetMethod');
    }

    // prevent cloning from calling it and setting it as private
    private function __clone(){}

    // method to create or return existing instance
    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function reviewShortcode($attributes)
    {
        // get attributes from shortcode and define the defaults if needed
        // this is where we're entering in a default name
        $a = shortcode_atts(array(
            'name' => get_the_author_meta('display_name'),
            'bio' => get_the_author_meta('description'),
            'img_url' => get_avatar_url(get_the_author_ID('ID')),
        ), $attributes);


        // shortcodes MUST return instead of echo
        // echoed content will show up before the post, not where the shrotcode is
        return '<hr>
     <div style="display:flex;">
            <div style="padding-right: 1em;">
                <img src="' . $a['img_url'] . '">
          </div>
        <div>
            <h3>' . $a['name'] . '</h3>
            <p>' . $a['bio'] . '</p>
         </div>
         </div>
        <hr>';
    }
}

// initialize our plugin (run the class code and constructor)
ReviewBlock::getInstance();

