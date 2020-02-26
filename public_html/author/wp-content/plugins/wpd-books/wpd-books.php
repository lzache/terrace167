<?php

/**
 * This is the plugin bootstrap file
 *
 * @wordpress-plugin
 * Plugin Name: Books
 * Description: Final for WPD - John Grisham
 * Author: Lauren Zache
 * Version: 1.0.0
 * Text Domain: wpd-books
 *
 */


namespace BookPlugin;


include __DIR__ . "/classes/CustomFields.php";
include __DIR__ . "/classes/BookSingleton.php";
include __DIR__ . "/classes/Plugin.php";
include __DIR__ . "/classes/ReviewBlock.php";
include __DIR__ . "/classes/BookSettings.php";
include __DIR__ . "/classes/BookPostType.php";
include __DIR__ . "/classes/ReviewPostType.php";
include __DIR__ . "/widgets/BookWidget.php";


Plugin::getInstance();