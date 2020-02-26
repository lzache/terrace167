<?php

namespace BookPlugin;

use WP_Query;

class BookPostType extends BookSingleton
{
    protected static $instance;

    const POST_TYPE = 'books';

    protected function __construct()
    {

        add_action('init', array($this, 'custom_post_type_books'));
        add_action('init', array($this, 'custom_taxonomy_genre'));

        add_action('admin_init', array($this, 'registerMetaBox'));

        add_action('save_post_' . self::POST_TYPE, array($this, 'saveBooksMeta'));

        add_filter('the_content', array($this, 'booksContentTemplate'));

    }


    // Register Custom Post Type
    function custom_post_type_books()
    {

        $labels = array(
            'name' => _x('Books', 'Post Type General Name', 'wpd-books'),
            'singular_name' => _x('Book', 'Post Type Singular Name', 'wpd-books'),
            'menu_name' => __('Books', 'wpd-books'),
            'name_admin_bar' => __('Book Type', 'wpd-books'),
            'archives' => __('Book Archives', 'wpd-books'),
            'attributes' => __('Book Attributes', 'wpd-books'),
            'parent_item_colon' => __('Parent Book:', 'wpd-books'),
            'all_items' => __('All Books', 'wpd-books'),
            'add_new_item' => __('Add New Book', 'wpd-books'),
            'add_new' => __('Add New Book', 'wpd-books'),
            'new_item' => __('New Book', 'wpd-books'),
            'edit_item' => __('Edit Book', 'wpd-books'),
            'update_item' => __('Update Book', 'wpd-books'),
            'view_item' => __('View Book', 'wpd-books'),
            'view_items' => __('View Books', 'wpd-books'),
            'search_items' => __('Search Book', 'wpd-books'),
            'not_found' => __('Not found', 'wpd-books'),
            'not_found_in_trash' => __('Not found in Trash', 'wpd-books'),
            'featured_image' => __('Featured Image', 'wpd-books'),
            'set_featured_image' => __('Set featured image', 'wpd-books'),
            'remove_featured_image' => __('Remove featured image', 'wpd-books'),
            'use_featured_image' => __('Use as featured image', 'wpd-books'),
            'insert_into_item' => __('Insert into Book', 'wpd-books'),
            'uploaded_to_this_item' => __('Uploaded to this Book', 'wpd-books'),
            'items_list' => __('Books list', 'wpd-books'),
            'items_list_navigation' => __('Books list navigation', 'wpd-books'),
            'filter_items_list' => __('Filter Books list', 'wpd-books'),
        );
        $args = array(
            'label' => __('Book', 'wpd-books'),
            'description' => __('These are John Grisham Books', 'wpd-books'),
            'labels' => $labels,
            'supports' => array('title', 'editor', 'thumbnail'),
            'taxonomies' => array('category', 'post_tag'),
            'hierarchical' => true,
            'public' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'menu_position' => 5,
            'show_in_admin_bar' => true,
            'show_in_nav_menus' => true,
            'can_export' => true,
            'has_archive' => true,
            'exclude_from_search' => false,
            'publicly_queryable' => true,
            'capability_type' => 'page',
            'show_in_rest' => true,
        );
        register_post_type(self::POST_TYPE, $args);

    }

// Register Custom Taxonomy
    function custom_taxonomy_genre()
    {

        $labels = array(
            'name' => _x('Genre Categories', 'Taxonomy General Name', 'wpd-books'),
            'singular_name' => _x('Genre Category', 'Taxonomy Singular Name', 'wpd-books'),
            'menu_name' => __('Genre', 'wpd-books'),
            'all_items' => __('Categories', 'wpd-books'),
            'parent_item' => __('Parent Category', 'wpd-books'),
            'parent_item_colon' => __('Parent Category:', 'wpd-books'),
            'new_item_name' => __('New Category Name', 'wpd-books'),
            'add_new_item' => __('Add New Category', 'wpd-books'),
            'edit_item' => __('Edit Category', 'wpd-books'),
            'update_item' => __('Update Category', 'wpd-books'),
            'view_item' => __('View Category', 'wpd-books'),
            'separate_items_with_commas' => __('Separate categories with commas', 'wpd-books'),
            'add_or_remove_items' => __('Add or remove categories', 'wpd-books'),
            'choose_from_most_used' => __('Choose from the most used', 'wpd-books'),
            'popular_items' => __('Popular Categories', 'wpd-books'),
            'search_items' => __('Search Categories', 'wpd-books'),
            'not_found' => __('Not Found', 'wpd-books'),
            'no_terms' => __('No Categories', 'wpd-books'),
            'items_list' => __('Categories list', 'wpd-books'),
            'items_list_navigation' => __('Categories list navigation', 'wpd-books'),
        );
        $args = array(
            'labels' => $labels,
            'hierarchical' => true,
            'public' => true,
            'show_ui' => true,
            'show_admin_column' => true,
            'show_in_nav_menus' => true,
            'show_tagcloud' => true,
            'show_in_rest' => true,
        );
        register_taxonomy('taxonomy', array(self::POST_TYPE), $args);

    }


    public function registerMetaBox()
    {
        add_meta_box('books_meta', "Book Information", array($this, 'booksMetaBox'), self::POST_TYPE, 'normal', 'low');
    }

    // contains the form for the meta box
    public function booksMetaBox()
    {
        $post = get_post();
        $publisher = get_post_meta($post->ID, CustomFields::publisher, true);
        $publishDate = get_post_meta($post->ID, CustomFields::publishDate, true);
        $pageCount = get_post_meta($post->ID, CustomFields::pageCount, true);
        $price = get_post_meta($post->ID, CustomFields::price, true);

        ?>


        <p><label for="publisher">Publisher:</label></p>
        <p><input type="text" id="publisher" name="publisher" value="<?= $publisher ?>"></p>

        <p><label for="publishDate">Publish Date:</label></p>
        <p><input type="date" id="publishDate" name="publishDate"
                  value="<?= $publishDate ?>" min="1989-01-01" max="2080-12-31"></p>

        <p><label for="price">Price:</label></p>
        <p><input type="number" id="price" name="price" value="<?= $price ?>"></p>

        <p><label for="pageCount">Page Count:</label></p>
        <p><input type="number" id="pageCount" name="pageCount" value="<?= $pageCount ?>"></p>

        <?php

    }

    // This saves our meta box custom fields
    public function saveBooksMeta()
    {
        $post = get_post();

        if (isset($_POST['publisher'])) {
            $publisher = sanitize_text_field($_POST['publisher']);
            update_post_meta($post->ID, CustomFields::publisher, $publisher);
        }

        if (isset($_POST['publishDate'])) {
            $publishDate = sanitize_text_field($_POST['publishDate']);
            update_post_meta($post->ID, CustomFields::publishDate, $publishDate);
        }

        if (isset($_POST['price'])) {
            $price = sanitize_text_field($_POST['price']);
            update_post_meta($post->ID, CustomFields::price, $price);
        }

        if (isset($_POST['pageCount'])) {
            $pageCount = sanitize_text_field($_POST['pageCount']);
            update_post_meta($post->ID, CustomFields::pageCount, $pageCount);
        }

    }

    public function booksContentTemplate($content)
    {
        $post = get_post();

        if ($post->post_type === self::POST_TYPE) {
            $publisher = get_post_meta($post->ID, CustomFields::publisher, true);
            $publishDate = get_post_meta($post->ID, CustomFields::publishDate, true);
            $price = get_post_meta($post->ID, CustomFields::price, true);
            $pageCount = get_post_meta($post->ID, CustomFields::pageCount, true);

            $content = '<h3 class="border-bottom py-2">Book Description</h3>
                    <p>' . $content . '</p>
                    
                    <h3 class="border-bottom py-2">Book Information</h3>';

            $content .= '<p>Publisher: ' . $publisher . '</p>';
            $content .= '<p>Publish Date: ' . $publishDate . '</p>';
            $content .= '<p>Price: $' . $price . '</p>';
            $content .= '<p>Page Count: ' . $pageCount . '</p>';

            $args = array(
                'post_type' => 'reviews',
                'orderby' => 'meta_value',
                'order' => 'DEC',
                'meta_key' => CustomFields::BOOKID,
                'meta_value' => $post->ID,
                'meta_compare' => '=',
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
                    $post = get_post();

                    $reviewerName = get_post_meta($post->ID, CustomFields::REVIEWERNAME, true);
                    $location = get_post_meta($post->ID, CustomFields::LOCATION, true);
                    $rating = get_post_meta($post->ID, CustomFields::RATING, true);
                    $bookID = get_post_meta($post->ID, CustomFields::BOOKID, true);


                    $content .= '<div class="reviewcard"><h3>'
                        . get_the_title() . '</h3>';
                    $content .= '<p>"' . get_the_content() . '"</p>';
                    $content .= 'Name: ' . $reviewerName . '<br>';
                    $content .= 'Location: ' . $location . '<br>';
                    $content .= 'Rating:' . $rating . '</div><br><br>';

                }
                echo '</ul>';
            } else {
                // no posts found
                echo '<p>Review Not Found</p>';
            }

            wp_reset_postdata();
        }
        return $content;
    }


}