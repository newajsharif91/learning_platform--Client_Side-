# Getting Started with Create React App

# Live Site Link



In the project directory, you can run:
### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000]to view it in your browser.


### `npm test`
### `npm run build`

Builds the app for production to the `build` folder.
Your app is ready to be deployed!

## Deploy in firebase (run)
* npm run build
* firebase deploy

# Here some steps.
* npx create-react-app my-app
* npm install firebase react-router-dom
* npm install -D tailwindcss
* npx tailwindcss init
* /{import('tailwindcss').Config} */
    [replace with content]
  content: ["./src/**/*.{html,js}"],
* delete index.css code and replace-
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
* npm i daisyui
* {import('tailwindcss').Config} */
    [replace with plugins]
    plugins: [require("daisyui")],
* set auth provider page
* set routes 
* set private provider for navigate

