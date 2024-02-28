# Project Summary

This document provides an overview of the sample book catalog project developed to demonstrate the usage of various web development technologies and libraries.

## Overview

The project is a simple web application that serves as a book catalog, allowing users to view a list of books, add them to a shopping cart, and view the cart's contents. It features a responsive design for better accessibility across different devices and screen sizes.

## Technologies Used

- **React**: A JavaScript library for building user interfaces. React was used to create the component-based UI for this application.
- **Redux Toolkit**: A toolset for efficient Redux development. It was utilized to manage the application's global state, handling actions such as adding and removing books from the shopping cart.
- **TypeScript**: An extension of JavaScript that adds static type definitions. TypeScript was used to enhance code quality and reliability through type checking.
- **Bootstrap**: The project incorporated Bootstrap for styling and responsive layout, facilitating a mobile-friendly design without extensive custom CSS.
- **React Router**: This library was employed to manage routing within the application, enabling navigation between the catalog and the cart view without page reloads.
- **Git**: Used for version control, Git allowed tracking of changes and collaboration.
- **GitHub**: The remote repository hosting service GitHub was used to store the code and track the project's development history online.

## Project Structure

- The `Catalog` component displays the list of books, fetching book data from a static JSON file to simulate a database.
- Each book is represented by a `BookItem` component, which displays the book's details and an "Add to Cart" button.
- The `Cart` component provides a view of the cart's contents, showing items that the user intends to purchase.
- The `Navbar` component includes navigation links and a cart icon that displays the current count of items in the cart.
- State management is centralized using Redux Toolkit, with slices defined for different parts of the application state, such as the books catalog and shopping cart.

## Features

- View a catalog of books with details including title, author, publishing date, and genre.
- Add and remove books from the shopping cart.
- Navigate between the catalog and cart views using React Router.
- Responsive design leveraging Bootstrap for an optimal user experience on various devices.

