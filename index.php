<?php
// Allow CORS for AJAX requests from your frontend server
header("Access-Control-Allow-Origin: http://13.49.36.132");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form fields safely
    $name = htmlspecialchars($_POST['name'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    if ($name && $email && $message) {
        // Return success as JSON in the exact format JavaScript expects
        echo '{"success":true,"message":"Form submitted successfully"}';
    } else {
        echo '{"success":false,"message":"Missing required fields"}';
    }
} else {
    echo '{"success":false,"message":"Invalid request method"}';
}
?>
