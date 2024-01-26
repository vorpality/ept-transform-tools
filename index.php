<?php
/*
 * Plugin Name:       Epotis Transform tools
 * Description:       Some react tools that look spicier than normal
 * Version:           1.0.0
 * Requires at least: 5.9
 * Requires PHP:      7.2
 * Author:            Epotis team
 * Text Domain:       e-potis
 */

if(!function_exists('add_action')) { 
    echo 'Seems like you stumbled here by accident.'; 
    exit;
}
 
//  Setup
define('EPTT_PLUGIN_DIR', plugin_dir_path(__FILE__));

//  Includes
$rootFiles = glob(EPTT_PLUGIN_DIR . 'includes/*.php');
$subDirectoryFiles = glob(EPTT_PLUGIN_DIR . 'includes/**/*.php'); 
$subSubDirectoryFiles = glob(EPTT_PLUGIN_DIR . 'includes/**/**/*.php');
$allFiles = array_merge($rootFiles, $subDirectoryFiles, $subSubDirectoryFiles);

foreach($allFiles as $filename){
    include_once($filename);
}
 
//  Hooks
add_action('init','eptt_register_blocks');
add_action('init', 'ept_transform_load_php_translations');
add_action('wp_enqueue_scripts', 'ept_transform_load_block_translations',100); 
