<?php 
function ept_transform_load_php_translations() {
  
  load_plugin_textdomain(
    'e-potis',
    false,
    "ept-transform-tools/languages"
  );
  
}

function ept_transform_load_block_translations(){
  $blocks = [
    'ept-transform-fancy-nav-editor-script',
    'ept-transform-fancy-header-editor-script',
    'ept-transform-language-button-editor-script',    
    'ept-transform-fancy-nav-view-script',
    'ept-transform-fancy-header-view-script',
    'ept-transform-language-button-views-script'
  ];

  foreach($blocks as $block){
    wp_set_script_translations(
      $block,
      'e-potis',
      EPTT_PLUGIN_DIR . "languages"
    );
  }
}