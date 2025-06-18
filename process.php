<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $newEntry = $_POST;
    echo "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Submitted Information</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f9; margin: 0; padding: 20px; text-align: center; }
            h1 { color: #333; }
            table { border-collapse: collapse; width: 60%; margin: 20px auto; background-color: #fff; }
            th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
            th { background-color: #f2f2f2; color: #333; }
            button {
                background-color: #dc3545;
                color: #fff;
                padding: 10px 15px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-top: 20px;
            }
            button:hover { opacity: 0.9; }
        </style>
        <script>
            function closeTab() {
                window.close();
            }
        </script>
    </head>
    <body>
        <h1>Submitted Information</h1>
        <table>
            <tr><th>Field</th><th>Value</th></tr>";
    foreach ($newEntry as $field => $value) {
        echo "<tr><td>" . htmlspecialchars(ucfirst($field)) . "</td><td>" . htmlspecialchars($value) . "</td></tr>";
    }

    echo "</table>
        <button onclick='closeTab()'>Exit</button>
    </body>
    </html>";
} else {
    echo "<script>
        alert('Invalid submission.');
        window.location.href = 'index.html';
    </script>";
}
?>
