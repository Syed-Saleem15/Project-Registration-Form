document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const successMessage = document.getElementById("successMessage");
        successMessage.style.display = "block";
        const newTab = window.open();
        const formData = new FormData(form);

        let output = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Submitted Information</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f9;
                        margin: 0;
                        padding: 20px;
                    }
                    h1 {
                        text-align: center;
                        color: #333;
                        margin-bottom: 20px;
                    }
                    table {
                        width: 70%;
                        margin: 20px auto;
                        border-collapse: collapse;
                        background-color: #fff;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    }
                    th, td {
                        padding: 15px;
                        text-align: left;
                        border: 1px solid #ddd;
                    }
                    th {
                        background-color: #83c6c7;
                        color: #333;
                        text-transform: uppercase;
                        font-weight: bold;
                    }
                    tr:nth-child(even) {
                        background-color: #f9f9f9;
                    }
                    tr:hover {
                        background-color: #f1f1f1;
                    }
                    button {
                        display: block;
                        margin: 20px auto;
                        background-color: #dc3545;
                        color: #fff;
                        padding: 10px 20px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 16px;
                    }
                    button:hover {
                        opacity: 0.9;
                    }
                </style>
            </head>
            <body>
                <h1>Submitted Information</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
        `;
        formData.forEach((value, key) => {
            output += `
                <tr>
                    <td>${key.charAt(0).toUpperCase() + key.slice(1)}</td>
                    <td>${value}</td>
                </tr>
            `;
        });

        output += `
                    </tbody>
                </table>
                <button onclick="window.close()">Close</button>
            </body>
            </html>
        `;
        newTab.document.write(output);
        newTab.document.close();
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
    });
});
