Fetch and Display Data from a Public API
Overview
This project demonstrates how to use the JavaScript Fetch API to retrieve user data from a public API and dynamically display it on a webpage. The project also includes error handling, a reload functionality, and modern styling.

Features
Fetches user data from the API: https://jsonplaceholder.typicode.com/users

Dynamically displays user information, including:

Name

Email

Address (street and city)

Error handling with meaningful messages for failed API requests.

Reload button to refetch and refresh data.

Responsive and stylish UI with animations and hover effects.

Technologies Used
HTML: Structuring the webpage.

CSS: Styling the webpage with modern designs.

JavaScript: Fetching and displaying data dynamically, handling errors, and adding interactivity.

Setup and Usage
Prerequisites
A modern browser (e.g., Chrome, Firefox, Edge).

A code editor (e.g., VS Code).

Basic knowledge of HTML, CSS, and JavaScript.

Steps
Clone the repository:

bash
Copy
Edit
git clone https://github.com/<your-username>/fetch-api-example.git
cd fetch-api-example
Open the project:

Open the folder in your code editor.

Launch index.html in your browser.

Test the functionality:

The user data should load on the page.

Click the "Reload Data" button to refetch the data.

Disconnect your internet to test error handling.

Project Structure
bash
Copy
Edit
fetch-api-example/
│
├── index.html      # HTML structure for the webpage
├── style.css       # CSS for styling the page
├── script.js       # JavaScript for fetching and displaying data
├── README.md       # This README file
Example Output
Normal Data Load
User data is fetched and displayed in stylish cards with names, emails, and addresses.

Error Handling
If there is a network error or the API fails, a meaningful error message is displayed.

Future Enhancements
Add search functionality to filter users by name.

Implement pagination if the dataset grows larger.

Introduce a loading spinner while data is being fetched.

