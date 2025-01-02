# Project structure

```sh
├───build                      # app building configuration using Vite
├───mock                       # mocked backend using json-server
└───src                        # app source code
    ├───api                    # global resources for accessing the backend
    ├───assets                 # static assets
    ├───components             # generic components
    ├───constants              # global constants
    ├───features               # app features - most of application logic
    │   ├───bootstrap
    │   ├───categories
    │   ├───shoppingLists
    │   └───...
    ├───formatters
    ├───hooks                  # generic hooks
    ├───i18n                   # internationalization configuration
    ├───router                 # routing configuration
    ├───stores                 # global stores
    ├───styles                 # global styling
    └───types                  # global data types
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
├───bootstrap           # bootstrap feature - application initialization logic, session management
│   ├───api             # specific backend calls
│   ├───components      # specific components
│   ├───services        # specific business logic
│   └───types           # specific data types
│       index.tsx       # exported resources
│
└───shoppingLists       # shopping lists feature - shopping lists management
    ├───api             # specific backend calls
    ├───components      # specific components
    ├───pages           # specific pages
    └───types           # specific data types
        index.tsx       # exported resources
```

## Component split

## Principles
