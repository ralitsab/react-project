# React Project

## Features

- **User Authentication**: Allows users to sign up, log in, and manage their profile.
- **Address Management**: Users can add, edit, and delete shipping addresses.
- **Profile Dashboard**: A profile page where users can view and update their address information.
- **Search Functionality**: Users can search for products by productId or productName.
- **Commenting**: Users can add and delete comments on the Product Page.
- **Cart Functionality**: Users can add products to the cart and place an order.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ralitsab/react-project.git
    cd react-project
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

### User Authentication

- **Sign Up**: Register a new account using the sign-up form.
- **Log In**: Log into an existing account using the login form.
- **Profile**: Access and update your profile information from the dashboard.

### Address Management

- **Add Address**: Use the form in the profile dashboard to add a new shipping address.
- **Edit Address**: Update existing addresses by selecting them from the profile dashboard.
- **Delete Address**: Remove addresses using the delete option in the profile dashboard.

### Search Functionality

- **Search**: Use the search bar to find products by productId or productName.

### Commenting

- **Add Comment**: Users can add comments in the relevant sections.
- **Delete Comment**: Users can delete only their comments.

### Cart Functionality
- **Add To Cart**: Users can add products to the cart.
- **Delete Cart Products**: Users can delete products from the cart.
- **Place Order**: Users can place an order.

## Access and Functionality

### Authenticated Users

Authenticated users (logged in) can:

- **Access Profile Dashboard**: View and update their profile information and shipping addresses.
- **Manage Addresses**: Add, edit, or delete their shipping addresses.
- **Add Products to Cart**: Add products to their cart.
- **Remove Products from Cart**: Remove products from their cart.
- **Place Orders**: Place orders for products in their cart.
- **Commenting**: Add and delete their own comments on product pages.

### Non-Authenticated Users

Non-authenticated users (guests) can:

- **View Products**: Browse and search for products.
- **Search for Products**: Use the search functionality to find products by productId or productName.
- **Add Products to Cart**: Add products to the cart.
- **View Comments**: View comments on product pages but cannot add or delete comments.

## Folder Structure

The project follows a standard React folder structure:

- `src/`
  - `components/` - Reusable React components.
  - `hooks/` - Custom React hooks.
  - `services/` - API service functions.
  - `context/` - Context providers and consumers for state management.
  - `utils/` - Utility functions and constants.
  - `App.js` - Main application component.
  - `index.js` - Entry point for React application.
