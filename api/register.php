<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Include Composer's autoloader to load Guzzle and its dependencies.
require '../vendor/autoload.php';

// Import Guzzle classes.
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;

$url = "https://backend.getlinked.ai/hackathon/registration";


// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Gather form data
    $email = $_POST["email"];
    $project = $_POST["project"];
    $teamName = $_POST["teamName"];
    $phoneNumber = $_POST["phoneNumber"];

    // Define your request parameters, including the URL, headers, and JSON body
    $requestOptions = [
        'headers' => [
            'Content-Type' => 'application/json',
        ],
        'json' => [
            "email" => $email,
            "team_name" => $teamName,
            "phone_number" => $phoneNumber,
            "project_topic" => $project,
            "group_size" => 10,
            "privacy_poclicy_accepted" => true,
            "category" => 1
        ],
    ];

    // Send the HTTP POST request
    $client = new Client();
    try {
        $response = $client->post($url2, $requestOptions);

        // Get the response content as a string
        $responseContent = $response->getBody()->getContents();

        // Output a JSON response indicating success
        echo json_encode(["success" => true, "message" => "Registration successful"]);
    } catch (ClientException $e) {
        // Handle any exceptions (e.g., server errors) here
        echo json_encode(["success" => false, "error" => "Registration failed: " . $e->getMessage()]);
    }
} else {
    // Return an error response if the request method is not POST
    echo json_encode(["success" => false, "error" => "Invalid request method"]);
}
