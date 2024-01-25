<?php
function eptt_form_handler() {
  if($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['form-id']) && $_POST['form-id']==='021'){
    switch_to_locale(htmlspecialchars($_COOKIE["wp_lang"]));
  }
}