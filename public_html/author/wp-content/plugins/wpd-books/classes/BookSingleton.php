<?php

namespace BookPlugin;

abstract class BookSingleton {
    protected static $instance;

    protected function __construct()
    {

    }

    private function __clone()
    {
    }

    public static function getInstance()
    {

        // 2 ways that the class can refer to itself
        // self - refers to the class that 'self' is written
        // static - refers to the class at runtime - this could include child classes
        // using static instead of self
        // static will refer to the subclass
        // self will always refer to this abstract class
        if (static::$instance == null) {
            static::$instance = new static();
        }
        return static::$instance;
    }
}