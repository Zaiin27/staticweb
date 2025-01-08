<?php
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Origin: http://localhost:3000"); // Ensure this matches the frontend URL
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

$host = 'localhost';
$dbname = 'user_auth';
$username = 'root';
$password = '';

try {
    // Establish database connection
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Query to fetch data
    $stmt = $pdo->query("SELECT email, password FROM users");
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return data as JSON
    header('Content-Type: application/json');
    echo json_encode($data);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => $e->getMessage()]);
}
?>
