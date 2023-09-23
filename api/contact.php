<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Include Composer's autoloader to load Guzzle and its dependencies.
require '../vendor/autoload.php';

// Import Guzzle classes.
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;

$url = "https://backend.getlinked.ai/hackathon/contact-form";


// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Gather form data
    $email = $_POST["email2"];
    $topic = $_POST["topic"];
    $first_name2 = $_POST["first_Name2"];
    $msg = $_POST["msg"];

    // Define your request parameters, including the URL, headers, and JSON body
    $requestOptions = [
        'headers' => [
            'Content-Type' => 'application/json',
        ],
        'json' => [
            "email" => $email,
            "project_topic" => $topic,
            "first_name" => $first_name2,
            "message" => $msg,
        ],
    ];

    // Send the HTTP POST request
    $client = new Client();
    try {
        $response = $client->post($url, $requestOptions);

        // Get the response content as a string
        $responseContent = $response->getBody()->getContents();

        // Output a JSON response indicating success
        echo json_encode(["success" => true, "message" => "Message sent successfully"]);
    } catch (ClientException $e) {
        // Handle any exceptions (e.g., server errors) here
        echo json_encode(["success" => false, "error" => "Message sending failed: " . $e->getMessage()]);
    }
} else {
    // Return an error response if the request method is not POST
    echo json_encode(["success" => false, "error" => "Invalid request method"]);
}
?>
