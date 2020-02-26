<?php


namespace BookPlugin;


class Plugin extends BookSingleton {

    protected function __construct()
    {

      BookPostType::getInstance();
      BookSettings::getInstance();
      ReviewPostType::getInstance();
      ReviewBlock::getInstance();

      register_activation_hook( __FILE__, array($this, 'registerFlush'));
      add_action('widgets_init', array($this, 'registerWidget'));


    }

    protected function registerFlush() {
        flush_rewrite_rules();
    }

    public function registerWidget() {
        register_widget('BookPlugin\BookWidget');
    }
}

