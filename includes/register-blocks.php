<?php

function eptt_register_blocks() {
    $blocks = [
        [ 'name' => 'fancy-header'],
        [ 'name' => 'fancy-nav'],
        [ 'name' => 'language-button']
    ];

    foreach($blocks as $block){
        register_block_type(
            EPTT_PLUGIN_DIR . 'build/blocks/'. $block['name'] .'/block.json',
            isset($block['options']) ? $block['options'] : []
        );
    }
} 