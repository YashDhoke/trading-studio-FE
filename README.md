# Strategy Management App

## Description

This is a simple Strategy Management App built with React. It allows users to:

- Create and save new strategies.
- View all saved strategies.
- Input validations when creating a strategy.
- Responsive pricing section UI.
- Local storage functionality to save the strategies.

## Features

1. **Pricing Section:**

   - A responsive pricing page is implemented where users can view different pricing plans for the service. The pricing section adapts across mobile, tablet, and desktop views.

2. **Create Strategy:**

   - The user can create new strategies with input fields.
   - Input validation ensures that all fields are properly filled before submitting.
   - Validations include checking for empty fields and ensuring the correct data format is entered.

3. **View All Saved Strategies:**

   - All saved strategies are displayed with relevant details.
   - Data is saved in the browser’s local storage, so the information persists across page reloads.

4. **Responsive Design:**
   - The pricing section is made fully responsive using Tailwind CSS, ensuring a consistent UI across different devices.

## Assumptions

- **Input Validations:**

  - It is assumed that when creating a strategy, all fields are required and must pass validation before the form is submitted.

- **Local Storage Usage:**

  - The app uses browser local storage to save and retrieve strategies. This means the saved data will persist across page reloads but will not be available across different devices or browsers.

- **Responsive Layout:**
  - The responsive layout has been implemented only for the pricing section, but this can be extended to other parts of the application if necessary.

## Prerequisites

Before running the app locally, make sure you have the following installed:

1. **Node.js** - You can download it from [nodejs.org](https://nodejs.org/).

2. **npm** - Comes installed with Node.js.

3. **Text Editor (Optional but recommended)** - VSCode, Sublime, etc.

## Installation

Follow these steps to run the app locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/YourGitHubUsername/your-repository-name.git

   cd your-repository-name

   npm i

   npm run dev / npm start
   ```
