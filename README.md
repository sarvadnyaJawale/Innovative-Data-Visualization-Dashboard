# Innovative-Data-Visualization-Dashboard

## Overview 
The BlackCoffer Visualization Dashboard is an interactive web application built with the MERN stack (MongoDB, Express, React, Node.js) and Chart.js. It leverages these technologies to provide a dynamic and user-friendly interface for visualizing and analyzing data. The dashboard is designed to help users gain valuable insights from data by utilizing various charts and filters.

## Features
Interactive Data Visualization: Use of Chart.js to create visually appealing and interactive charts.
Dynamic Filters: Customizable filters including year, topics, sector, region, PEST, source, SWOT, country, city, and more.
Data Integration: Fetch and display data from a MongoDB database using a Node.js API.

## Tech Stack
- MongoDB: Database layer storing essential data for the dashboard.
- Express: Backend framework providing APIs to fetch and manage data.
- React: Frontend framework rendering the dynamic and user-friendly interface.
- Node.js: Runtime environment for server-side scripting.
- Chart.js: Library for creating interactive and visually appealing charts.
 
## Installation
To get started with the BlackCoffer Visualization Dashboard, follow these steps:

1. Clone the repository:

bash
Copy code
git clone https://github.com/RiteshKumarShukla/BlackCoffer-Visualization-Dashboard.git

2. Navigate to the project directory:

bash
Copy code
cd BlackCoffer-Visualization-Dashboard

3. Install dependencies:

- For the backend:

bash
Copy code
cd server
npm install

- For the frontend:

bash
Copy code
cd ../client
npm install
Run the application:

4. Start the backend server:

bash
Copy code
cd ../server
npm start

5. Start the frontend application:

bash
Copy code
cd ../client
npm start

6. Access the dashboard:

Open your browser and navigate to http://localhost:3000.

## Data
The dashboard uses data from the provided jsondata.json file, which includes key variables such as:

- Intensity
- Likelihood
- Relevance
- Year
- Country
- Topics
- Region
- City
- Filters
 
7. The dashboard includes several filters to refine data visualizations:

- End Year
- Topics
- Sector
- Region
- PEST
- Source
- SWOT
- Country
- City
  
## About
This dashboard leverages the MERN stack to provide a seamless and interactive experience for data visualization and analysis. The visualizations are powered by Chart.js, enhancing the ability to understand trends and patterns within the data.

## Contributing
Feel free to contribute to this project by submitting issues, suggesting features, or creating pull requests. For any questions or feedback, please reach out.

License
This project is licensed under the MIT License.
