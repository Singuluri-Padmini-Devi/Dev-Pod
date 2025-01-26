Lead Dashboard
This project is a simple and interactive Lead Dashboard built with React, showcasing a clean and modern design, and displaying leads data from a backend API. The dashboard allows for easy viewing and filtering of leads based on different attributes, such as their name, email, and source.

Features:
Display a list of leads (name, email, source)
Real-time data fetching from the backend (no need to refresh the page)
Clean and responsive design
Interactive features like search and filtering
Table row hover effects for better UX
Table of Contents
Installation
Features
Usage
Enhancements
Project Structure
Contributing
License
Installation
To get started with this project, follow these steps:

Clone the repository:

git clone https://github.com/your-username/lead-dashboard.git
cd lead-dashboard
Install dependencies:

npm install
Run the development server:

npm run dev
Now, visit http://localhost:3000 in your browser to see the Lead Dashboard in action.

Features
Lead List: Displays a table of leads with name, email, and source.
Real-time Updates: Data is fetched dynamically from the backend without needing to refresh the page.
Search Functionality: Users can search leads by name or email.
Source Filtering: Users can filter the leads based on the source (manual, Facebook, Google).
Responsive Design: The layout is mobile-friendly and adapts to different screen sizes.
Interactive Table: Hover effects, smooth animations, and transitions for better user experience.
Usage
Search for Leads: Enter keywords in the search bar to search leads by name or email.
Filter by Source: Select the source (manual, Facebook, Google) from the dropdown to filter the leads.
Hover on Rows: Hover over each row in the table to highlight it for better readability.
Responsive Layout: The dashboard will adjust to smaller screens like tablets and mobile devices.
Enhancements
These are the additional features that can be added or are already in the process:

Pagination: If the list of leads becomes too long, pagination can be added to navigate through the results.
Export Leads: Functionality to export the leads list as a CSV file.
Charts/Stats Overview: Display total leads and other breakdowns like "Leads by Source" or "Leads by Status".
Sorting: Enable sorting of columns (e.g., sort leads by name or date).
Advanced Filtering: Add more filters, such as status or date range.
Detailed Lead Information: Clicking on any lead row can display more detailed information like phone numbers, locations, notes, and last contact date.
Project Structure

/lead-dashboard
  /public
    /index.html
  /src
    /components
      - LeadDashboard.tsx        # Dashboard component displaying the list of leads
    /styles
      - styles.css               # CSS styles for the dashboard
    - App.tsx                    # Main App component
  /node_modules
  - package.json                 # Project dependencies and configuration
  - README.md                    # Project documentation
Contributing
We welcome contributions to enhance the project! Here’s how you can help:

Fork the repository to your own GitHub account.
Create a new branch.
Make your changes or add a new feature.
Commit your changes and create a pull request.
License
This project is open-source and available under the MIT License.

Example of Lead Data Displayed:
Name	Email	Source
John Doe	john.doe@example.com	Facebook
Jane Smith	jane.smith@example.com	Google
Feel free to modify the design, add new features, or extend the functionality according to your needs. Enjoy building your Lead Dashboard!
