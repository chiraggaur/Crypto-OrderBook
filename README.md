Crypto Orderbook
A Next.js-based application that visualizes cryptocurrency order books using interactive charts, including line,candlestick and volume indicators, with integration of various libraries like Chart.js, D3, and Axios.

Table of Contents
Demo
Features
Tech Stack
Installation
Usage
Scripts
Project Structure
Contributing
License
Demo
Check out the live demo of the project here -> https://order-book-beta.vercel.app/.

Features

Real-time order book visualization with candlestick and volume charts
Interactive charts using Chart.js with zooming and panning capabilities
Custom spread indicator for analyzing bid-ask spread
Responsive UI built with Tailwind CSS
Easy data fetching and state management with Axios and React Hooks
Tech Stack
Frontend: React, Next.js, Tailwind CSS
Charting Libraries: Chart.js, Chartjs-Plugin-Zoom, Chartjs-Chart-Financial
Data Fetching: Axios
Utility Libraries: D3
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/chiraggaur/Crypto-OrderBook.git
Navigate to the project directory:

bash
Copy code
cd crypto-orderbook
Install the dependencies:

bash
Copy code
npm install
Usage
To start the development server, run:

bash
Copy code
npm run dev
Open http://localhost:3000 to view it in your browser.

For production build:

bash
Copy code
npm run build
npm start
Scripts
npm run dev: Starts the development server
npm run build: Builds the project for production
npm run start: Starts the production server
npm run lint: Lints the project files
Project Structure
csharp
Copy code
crypto-orderbook/
├── components/ # React components
├── pages/ # Next.js pages
├── public/ # Public assets
├── styles/ # Tailwind CSS and other styles
├── utils/ # Utility functions
├── package.json # Project dependencies
├── README.md # Project documentation
└── tsconfig.json # TypeScript configuration
Dependencies
Main
React: ^18.3.1
Next.js: ^15.0.3
Chart.js: ^4.4.6
React Chart.js 2: ^5.2.0
Chartjs-Chart-Financial: ^0.2.1
Chartjs-Plugin-Zoom: ^2.0.1
Axios: ^1.7.7
D3 Types: ^7.4.3
Tailwind CSS: ^3.4.14
Development
TypeScript: ^5
ESLint: ^8
PostCSS: ^8.4.49
Autoprefixer: ^10.4.20

Fork the repository
Create a new feature branch (git checkout -b feature-branch)
Commit your changes (git commit -m "Add feature")
Push to the branch (git push origin feature-branch)
Open a pull request
