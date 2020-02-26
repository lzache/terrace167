<?php

namespace BookPlugin;

class ReviewPostType extends BookSingleton
{
    protected static $instance;

    const POST_TYPE = 'reviews';

    protected function __construct()
    {
        add_action('init', array($this, 'custom_post_type_reviews'));

        add_action('admin_init', array($this, 'registerMetaBox2'));

        add_action('save_post_' . self::POST_TYPE, array($this, 'saveReviewsMeta'));

        add_filter('the_content', array($this, 'reviewContentTemplate'));
    }


// Register Custom Post Type
    function custom_post_type_reviews() {

        $labels = array(
            'name'                  => _x( 'Reviews', 'Post Type General Name', 'wpd-reviews' ),
            'singular_name'         => _x( 'Review', 'Post Type Singular Name', 'wpd-reviews' ),
            'menu_name'             => __( 'Reviews', 'wpd-reviews' ),
            'name_admin_bar'        => __( 'Reviews', 'wpd-reviews' ),
            'archives'              => __( 'Review Archives', 'wpd-reviews' ),
            'attributes'            => __( 'Review Attributes', 'wpd-reviews' ),
            'parent_item_colon'     => __( 'Parent Review:', 'wpd-reviews' ),
            'all_items'             => __( 'All Reviews', 'wpd-reviews' ),
            'add_new_item'          => __( 'Add New Review', 'wpd-reviews' ),
            'add_new'               => __( 'Add New Review', 'wpd-reviews' ),
            'new_item'              => __( 'New Review', 'wpd-reviews' ),
            'edit_item'             => __( 'Edit Review', 'wpd-reviews' ),
            'update_item'           => __( 'Update Review', 'wpd-reviews' ),
            'view_item'             => __( 'View Review', 'wpd-reviews' ),
            'view_items'            => __( 'View Reviews', 'wpd-reviews' ),
            'search_items'          => __( 'Search Review', 'wpd-reviews' ),
            'not_found'             => __( 'Not found', 'wpd-reviews' ),
            'not_found_in_trash'    => __( 'Not found in Trash', 'wpd-reviews' ),
            'featured_image'        => __( 'Featured Image', 'wpd-reviews' ),
            'set_featured_image'    => __( 'Set featured image', 'wpd-reviews' ),
            'remove_featured_image' => __( 'Remove featured image', 'wpd-reviews' ),
            'use_featured_image'    => __( 'Use as featured image', 'wpd-reviews' ),
            'insert_into_item'      => __( 'Insert into Review', 'wpd-reviews' ),
            'uploaded_to_this_item' => __( 'Uploaded to this Review', 'wpd-reviews' ),
            'items_list'            => __( 'Reviews list', 'wpd-reviews' ),
            'items_list_navigation' => __( 'Reviews list navigation', 'wpd-reviews' ),
            'filter_items_list'     => __( 'Filter Reviews list', 'wpd-reviews' ),
        );
        $args = array(
            'label'                 => __( 'Review', 'wpd-reviews' ),
            'description'           => __( 'Book Reviews', 'wpd-reviews' ),
            'labels'                => $labels,
            'supports'              => array( 'title', 'editor' ),
            'taxonomies'            => array( 'category', 'post_tag' ),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_position'         => 5,
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => true,
            'can_export'            => true,
            'has_archive'           => true,
            'exclude_from_search'   => false,
            'publicly_queryable'    => true,
            'capability_type'       => 'page',
        );
        register_post_type( 'reviews', $args );

    }

    public function registerMetaBox2()
    {
        add_meta_box('review_meta', 'Review This Book', array($this, 'reviewMetaBox'), 'reviews', 'side', 'low');
    }

    public function reviewMetaBox()
    {

        $post = get_post();
        $reviewerName = get_post_meta($post->ID, CustomFields::REVIEWERNAME, true);
        $location = get_post_meta($post->ID, CustomFields::LOCATION, true);
        $rating = get_post_meta($post->ID, CustomFields::RATING, true);
        $bookID = get_post_meta($post->ID, CustomFields::BOOKID, true);

        $bookIDargs = array(
            'post_type' => 'books',
            'value_field' => 'ID',
//            'orderby' => 'meta_value',
            'name' => 'bookID',
            'selected' => $bookID,
        );


        ?>

        <div>
            <div>
                <p><label for="reviewerName">Name:</label></p>
                <p><input type="text" id="reviewerName" name="reviewerName" value="<?= $reviewerName ?>"></p>

                <p><label for="location">Location:</label></p>
                <p><input type="text" id="location" name="location" value="<?= $location ?>"></p>

                    <h4> Rating </h4>
                    <select name="rating" value="<?= $rating ?>">
                        <option value="⭐" <?= $rating == '⭐' ? 'selected' : '' ?>>⭐</option>
                        <option value="⭐⭐" <?= $rating == '⭐⭐' ? 'selected' : '' ?>>⭐⭐</option>
                        <option value="⭐⭐⭐" <?= $rating == '⭐⭐⭐' ? 'selected' : '' ?>>⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐" <?= $rating == '⭐⭐⭐⭐' ? 'selected' : '' ?>>⭐⭐⭐⭐</option>
                        <option value="⭐⭐⭐⭐⭐" <?= $rating == '⭐⭐⭐⭐⭐' ? 'selected' : '' ?>>⭐⭐⭐⭐⭐</option>
                    </select>

                <p><label for="bookID">Book ID:</label></p>
                <p><?php wp_dropdown_pages( $bookIDargs ) ?> </p>

            </div>
        </div>
        <?php

    }


    public function saveReviewsMeta()
    {
        $post = get_post();

        if(isset($_POST['reviewerName'])) {
            $reviewerName = sanitize_text_field($_POST['reviewerName']);
            update_post_meta($post->ID, CustomFields::REVIEWERNAME, $reviewerName);
        }

        if(isset($_POST['location'])) {
            $location = sanitize_text_field($_POST['location']);
            update_post_meta($post->ID, CustomFields::LOCATION, $location);
        }

        if(isset($_POST['rating'])) {
            $rating = sanitize_text_field($_POST['rating']);
            update_post_meta($post->ID, CustomFields::RATING, $rating);
        }

        if(isset($_POST['bookID'])) {
            $bookID = sanitize_text_field($_POST['bookID']);
            update_post_meta($post->ID, CustomFields::BOOKID, $bookID);
        }

    }


    // reviewerName, location, rating, bookID

    public function reviewContentTemplate($content)
    {
        $post = get_post();

        if ($post->post_type === self::POST_TYPE) {
            $reviewerName = get_post_meta($post->ID, CustomFields::REVIEWERNAME, true);
            $location = get_post_meta($post->ID, CustomFields::LOCATION, true);
            $rating = get_post_meta($post->ID, CustomFields::RATING, true);
            $bookID = get_post_meta($post->ID, CustomFields::BOOKID, true);

            $content = '<h3 class="border-bottom py-2"> Review Description</h3>
                    <p>' . $content . '</p>

                    <h3 class="border-bottom py-2">Reviewer Info</h3>';

            $content .='<p>Reviewer Name: ' . $reviewerName . '</p>';
            $content .='<p>Location : ' . $location . '</p>';
            $content .='<p>Review Rating: ' . $rating . '</p>';
            $content .='<p>Book ID: ' . $bookID . '</p>';


//            if (get_option(ReviewSettings::rating)) {
//                $content .= '<p>Rating: ' . $rating . '</p>';
//            }
//            if (get_option(ReviewSettings::recommend)) {
//                $content .= '<p>Recommend: ' . $recommend . '</p>';
//            }

        }
        return $content;
    }


}


