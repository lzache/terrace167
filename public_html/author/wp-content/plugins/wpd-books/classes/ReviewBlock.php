<?php


namespace BookPlugin;

use WP_Query;

class ReviewBlock{
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


    // include the review, reviewer’s name, location and a link to the book.

    public function reviewShortcode($attributes) {

        $args = array(
            'post_type'  => 'reviews',
            'posts_per_page' => '1',
            'orderby' => 'rand',

        );

        // The Query
        $the_query = new WP_Query(
            $args
        );

        // The Loop
        if ($the_query->have_posts()) {
            echo '<ul>';
            while ($the_query->have_posts()) {
                $the_query->the_post();
                return '<p>' . get_the_title() . '</p>' .
                    '<p>"' . get_the_content() . '"</p>';


            }
            echo '</ul>';
        } else {
            // no posts found
            echo '<p>Review Not Found</p>';
        }

        wp_reset_postdata();

    }

}