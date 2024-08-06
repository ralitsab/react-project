# React Project

## Features

- **User Authentication**: Allows users to sign up, log in, and manage their profile.
- **Address Management**: Users can add, edit, and delete shipping addresses.
- **Profile Dashboard**: A profile page where users can view and update their address information.
- **Search Functionality**: Users can search for products by productId or productName.
- **Commenting**: Users can add and delete comments on Product Page.
- **Cart Functionality**- Users can add products to cart and place an order.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js]
- [npm]

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ralitsab/react-project.git
    cd react-project
    ```

2. **Install dependencies:**

    npm install


3. **Start the development server:**

    npm run dev

### User Authentication

- **Sign Up**: Register a new account using the sign-up form.
- **Log In**: Log into an existing account using the login form.
- **Profile**: Access and update your profile information from the dashboard.

### Address Management

- **Add Address**: Use the form in the profile dashboard to add a new shipping address.
- **Edit Address**: Update existing addresses by selecting them from the profile dashboard.
- **Delete Address**: Remove addresses using the delete option in the profile dashboard.

### Search Functionality

- **Search**: Use the search bar to find products by productId or Product Name.

### Commenting

- **Add Comment**: Users can add comments in the relevant sections.
- **Delete Comment**: Users can delete only their comments.

### Cart Functionality
- **Add To Cart**: Users can add products to cart.
- **Delete Cart Products**: Users can delete products from the cart.
- **Place Order**: Users can place an order.


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
