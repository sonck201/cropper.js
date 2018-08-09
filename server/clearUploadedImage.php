<?php

foreach (glob(__DIR__ . '/../dest/*') as $item) {
    if (is_file($item)) {
        echo basename($item) . '<br>';
        @unlink($item);
    }
}
