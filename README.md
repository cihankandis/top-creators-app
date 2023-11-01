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

## App Module

App module is the root module in the project and it is the starting point.

### Module Description

App module will bootstrap the application.

- **app-routing.module:** contains the config for the routing. (lazy loading)
- **error.interceptor:** is the interceptor for the HTTP request errors. it is configured in the app.module.ts

## Top Creators Feature Module

The **Top Creators** feature module is designed to be loaded lazily for better performance. (Since there is only one feature in this project, it may not be necessary to use lazy loading. However, if there will be more features and then it's a good practice to have them loaded lazily)

### Module Description

The **top-creators** module encapsulates all components necessary to display a list of top creators. Key components within this module:

- **top-creators.component:** Responsible for fetching data utilizing a service.
- **creator-list.component:** Displays the list of creators.
- **creators-api.service:** Provides functions to fetch data from the server.
- **creators-data.service:** Offers functions to retrieve data in the expected format.
- **data-utils:** Contains helper functions used for data filtering and sorting purposes.

## Setup

To set up the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   cd creator-products-app
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Environment Configuration:**
   - Update the environment variables in the `environment.ts` or `environment.development.ts` to use different dataUrl.

## Running the Application

To start the application, execute the following command:

```bash
ng serve
```

## Running the tests

```bash
npm run test
```

# Extra notes:

- If the dataset is expected to be large, it might be beneficial to move the data filtering and sorting operations to the backend. Performing heavy operations on the client side is not advisable.

- If these operations must be executed on the client side, using web workers might be a better approach since they run on a separate thread and do not block the UI.

- I've implemented a top-creators feature module to consolidate all components and services related to top creators in one place. Considering potential future features, I've configured the project for lazy loading.

- ChangeDetectionStrategy.OnPush is employed for the components. This way, Angular's change detection mechanism will only perform checks if the input reference changes or if any asynchronous operation within the component is completed.
