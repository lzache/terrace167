<?php

namespace BookPlugin;

use WP_Query;

class BookWidget extends \WP_Widget{
    // need to override the constructor
    public function __construct()
    {
        // ID Base is when you're looking at a WP site, inspect element, and there's a div for the widget <section id="">
        // Name is what you will see on the backend
        // Widget options are extra things you can pass along

        $widget_options = array('description' => 'This is my book widget');
        parent::__construct('book-widget', 'Book Widget', $widget_options);
    }

    // WP has functions it assumes you will override
    // this is called when editing a widget
    // passes the $instance array with that instances values/options
    public function form($instance){
        $title = isset($instance['title']) ? $instance['title'] : 'Default Title';

        $cat = $instance['cat'] ?? 'uncategorized';
        $author = $instance['author'] ?? 'Author';

        // $this->>get_field_id('title')' creates a unique id for this field
        // the class= widefat was found using inspect in order to keep title&input box on different
        // lines like the rest of the widgets
        ?>
        <p>
            <label for="<?= $this->get_field_id('title'); ?>">Title</label>
            <input id="<?= $this->get_field_id('title'); ?>"
                   name="<?= $this->get_field_name('title')?>"
                   value="<?= $title ?>"
                   class="widefat"
                   type="text">
        </p>

        <?php

    }

    // update widget
    // return what should be saved to the database
    // when defining params you can make up what variables you want
    public function update($newInstance, $oldInstance){

        $instance = array();
        $instance['title'] = strip_tags($newInstance['title']);
//        $instance['cat'] = strip_tags($newInstance['cat']);


        // return what you want saved in the database
        return $instance;
    }

    // this is the display widget- front end
    public function widget($args, $instance)
    {
        echo $args['before_widget'];
        echo $args['before_title'] . $instance['title'] . $args['after_title'];

        $args = array(
            'post_type'  => 'books',
            'posts_per_page' => '5',
            'orderby' => 'meta_value',
            'order' => 'DEC',
            'meta_key' => 'publishDate',

        );

        // Here's the body of the widget
        ?>


        <?php

        // Query that we got from the resources website
        ?>
<!--        <h4>Categories</h4>-->
        <?php
// The Query
        $the_query = new WP_Query(
            $args
        );

// The Loop
        if ($the_query->have_posts()) {
            echo '<ul>';
            while ($the_query->have_posts()) {
                $the_query->the_post();
                echo '<li><a href="' . get_permalink() . '">' . get_the_title() . '</li>' .
                    '<li>' . get_post_meta(get_the_ID(), 'publishDate', true) . '</li><br>';
            }
            echo '</ul>';
        } else {
            // no posts found
            echo '<p>No Posts Found.</p>';
        }

        ?>

<!--        <h4>Author: --><?//= $instance['author']?><!--</h4>-->
        <?php

// The Query
        $the_query = new WP_Query( array(
            'author' => $instance['author'],
            'posts_per_page' => 5
        ));

// The Loop
        if ($the_query->have_posts()) {
            echo '<ul>';
            while ($the_query->have_posts()) {
                $the_query->the_post();
//                echo '<li>' . get_the_title() . '</li>';
            }
            echo '</ul>';
        } else {
            // no posts found
            echo '<p>Author Not Found</p>';
        }

        wp_reset_postdata();


        echo $args['after_widget'];

    }
}
