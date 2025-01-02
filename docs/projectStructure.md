# Project structure

```sh
├───build                              # app building configuration using Vite
├───mock                               # mocked backend using json-server
└───src                                # app source code
    ├───api                            # global resources for accessing the backend
    ├───assets                         # static assets
    ├───components                     # generic components
    ├───constants                      # global constants
    ├───features                       # app features - most of application logic
    │   ├───bootstrap
    │   ├───categories
    │   ├───shoppingLists
    │   └───...
    ├───formatters
    ├───hooks                          # generic hooks
    ├───i18n                           # internationalization configuration
    ├───router                         # routing configuration
    ├───stores                         # global stores
    ├───styles                         # global styling
    └───types                          # global data types
```

## Feature based architecture

The core concept of this architecture is to organize the application by features. **Each feature should have its own dedicated folder, containing all the code necessary for that specific functionality.** These folders should follow a consistent structure to make it easy to navigate between them. The size of each feature and the splitting strategy should be tailored to the needs of each project.

Benefits of using this architecture:

- the code is more focused and self-contained
- what is exposed externally should be kept to a minimum
- it is easier to scale and refactor
- a feature can be relocated more easily
- it facilitates parallelization of work

In the project structure above, the `features` folder includes sub-folders for each feature in the shopping list application. Code outside this folder is mostly global and generic, not specific to the application. Below is the structure of the two implemented features:

```sh
├───bootstrap                          # bootstrap feature - app initialization logic, session management
│   ├───api                            # specific backend calls
│   ├───components                     # specific components
│   ├───services                       # specific business logic
│   └───types                          # specific data types
│       index.tsx                      # exported resources
│
└───shoppingLists                      # shopping lists feature - shopping lists management
    ├───api                            # specific backend calls
    ├───components                     # specific components
    ├───pages                          # specific pages
    └───types                          # specific data types
        index.tsx                      # exported resources
```

## Component split

The main building block of a React application is the component. **For optimal performance, it is recommended to keep components as small as possible.** Remember that every time a prop or state changes, the component re-renders. If a component becomes too large, consider breaking it down into smaller, more manageable components.

While developing React applications, you may notice that a single component often handles multiple responsibilities, such as rendering, business logic, and state management. Although consolidating all related logic in one place has its benefits, it can quickly become disorganized and difficult to manage as the component grows. **In such cases, I recommend splitting the component into the following parts:**

- `ComponentView`
  - only responsible for rendering JSX
  - should not include any business logic
- `useComponent`
  - the custom hook for the component
  - connects the component to the service
  - uses React hooks
- `ComponentService`
  - contains the business logic
  - should be implemented in plain JavaScript
  - designed to be independent of React

Key advantages of this approach:

- easier and faster to locate specific parts of the component
- promotes focus by allowing you to work exclusively on rendering or business logic, as needed
- simplifies migration to another framework, as only the custom hook (`useComponent`) is tightly coupled to React

It's important to note that this component-splitting strategy is merely a guideline. Not all React components need to be divided into these three parts. In fact, the majority of them should not. **I recommend starting with a single, unified component and splitting it only when one aspect becomes easier to understand and maintain as a separate entity.**

For an example of this structure, refer to [this implementation](../src/features/shoppingLists/components/shoppingListView) in the codebase.

```sh
│   listFormData.ts                    # component data types
│   listFormService.test.ts            # unit tests for business logic
│   listFormService.ts                 # component business logic
│   shoppingListView.module.scss
│   shoppingListView.tsx               # component view
│   useShoppingListView.ts             # custom hook
```

## Principles

This architecture is built on two foundational principles: colocation and separation of concerns.

### Colocation

Functions that work together should be kept together. **This means related code should be placed as close as possible to the functionality it supports.** Adopting this approach offers several benefits:

- functionalities are self-contained, reducing the risk of polluting the global space
- dependencies between functionalities are minimized
- related code is easier to locate
- scaling and refactoring functionalities becomes simpler
- it is easier to reorganize or move parts of the codebase when needed

The feature-based architecture is fundamentally built on the colocation principle.

### Separation of concerns

**Every piece of code in an application should have a single, well-defined responsibility.** This principle provides the following advantages:

- promotes a well-structured application
- reduces the spaghetti code
- helps you stay focused on specific aspects of the code at any given time
- simplifies locating specific pieces of the functionality
- facilitates the migration of individual parts of the application

The component splitting approach mentioned earlier is a clear example of this principle in practice. Similarly, the folder structure of features reflects this principle by keeping different concerns separated and organized.
