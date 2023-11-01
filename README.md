# Top Creators Application

## Description

The "Top Creators Application" is a project built using React. The primary goal is to show top creators using the following conditions:

- Creators should be sorted descending by the number of the products they created.
- If creators have the same number of products, preference should be given to the creator of the most recent product.

### External Libraries

- **Material UI:**

  - Provides consistent and visually appealing UI components.
  - components are designed with accessibility in mind.
  - components are optimized for performance.
  - components are tested across different browsers.

- **Axios:**

  - allows to intercept requests or responses, enabling centralized handling of errors, authentication, logging.
  - error handling capabilities for API requests

- **React-error-boundary**

  - to catch errors and display fallback error messages

- **EsLint:**
  - identify syntax errors, common mistakes
  - enforces consistent code style
  - identify potential sources of bugs

# Project Structure

- `/src`: Main source code directory.
  - `/common`: Contains shared components like ErrorFallback
  - `/features`: Contains feature-specific components and logic.
  - `/TopCreators`: Manages components related to top creators.
    - `/api`: Handles API request to fetch creator and products data
    - `/components`: Components for displaying top creators.
    - `/data`: Handles data requests and data manipulation for top creators.
    - `/utils`: Houses utility functions, helper methods, and shared code.
    - `/types`: contains type definitions for top creator entities.
  - `/styles`: Stores CSS, SCSS, or other style-related files.
  - `/interceptors`: interceptors for API requests

## Setup

To set up the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   cd top-creators-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Environment Configuration:**
   - Update the environment variables in `.env` file (if necessary).

## Running the Application

To start the application, execute the following command:

```bash
npm run start
```

## Running the tests

```bash
npm run test
```

# Extra notes:

- If the dataset is expected to be large, it might be beneficial to move the data filtering and sorting operations to the backend. Performing heavy operations on the client side is not advisable.

- If these operations must be executed on the client side, using web workers might be a better approach since they run on a separate thread and do not block the UI.
