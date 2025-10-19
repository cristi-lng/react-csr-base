# Coding tools

## Type safety

I highly recommend using [TypeScript↗](https://www.typescriptlang.org/) for any JavaScript project. The benefits it offers are so significant that it’s hard to argue against it these days. Some key advantages of using TypeScript include:

- clear understanding of what each variable contains
- ability to easily find all references to a variable or function
- simplifies refactoring and code changing
- helps prevent data type related issues

While it may take some time to get used to it and might require writing additional code, I believe the advantages outweigh these minor inconveniences.

In addition to the official documentation, here are some other helpful resources:

- [TypeScript in React↗](https://www.youtube.com/watch?v=TPACABQTHvM)
- [Type vs interface↗](https://www.youtube.com/watch?v=Idf0zh9f3qQ)
- [Why you shouldn’t use enums↗](https://www.youtube.com/watch?v=3aUHskjF7pc)

## Routing

The router is one of the most crucial parts of an application, as it typically orchestrates its various functionalities. Modern routers are very powerful and handle tasks such as data loading, error handling, page rendering, code splitting, and much more. It’s worth dedicating time to understand how routers work and how to use them effectively.

In React, the two primary routing solutions are [React Router↗](https://reactrouter.com/) and [TanStack Router↗](https://tanstack.com/router/latest). Both are feature-rich, and the choice between them is often a matter of personal preference, as each has its own strengths and weaknesses.

For this application, I have opted for TanStack Router due to its extensive features and higher level of customizability. However, you can replace it with React Router if you prefer.

These are the key files that show how the router brings everything together:

- [File-based routing plugin](../build/plugins.ts)
- [Router configuration](../src/router/routerProvider.tsx)
- [Generated route tree](../src/router/routeTree.gen.ts)
- [File route example](../src/router/routes/shoppingLists/$id.tsx)

## Data fetching

Most applications need to fetch and work with data from a backend. Unfortunately, React doesn’t provide a built-in mechanism to handle this interaction. While `useEffect` can be a solution, it comes with several limitations and potential issues. Fortunately, there are libraries specifically designed to address these limitations. The libraries offer features such as:

- notifications about the fetch status (e.g., pending, error, or success)
- built-in data caching support
- mechanisms for refreshing data

[TanStack Query↗](https://tanstack.com/query/latest) is one of the most popular solutions, though alternatives like [SWR↗](https://swr.vercel.app/) are also available. In the shopping list application, I’ve chosen TanStack Query. Below are some key files that illustrate how it integrates into a JavaScript application:

- [Http client](../src/api/httpClientProvider.ts)
- [TanStack Query configuration](../src/api/queryProvider.tsx)
- [API calls to the backend](../src/features/shoppingLists/api/shoppingListsApi.ts)
- [Query options for the API calls](../src/features/shoppingLists/api/shoppingListsQueries.ts)
- [Usage within a page](../src/features/shoppingLists/components/shoppingListsPage/shoppingListsPage.tsx)

If you are interested in learning more about the architectural decisions, check out the following resources:

- [Extracting API logic from components↗](https://profy.dev/article/react-architecture-api-layer)
- [Best practices for TanStack Query↗](https://www.reddit.com/r/reactjs/comments/18z3nsi/comment/kgfz6uz/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&rdt=51317)
- [Effective use of TanStack Query keys↗](https://tkdodo.eu/blog/effective-react-query-keys)

## State management

In React, we typically manage state using the `useState` hook. However, there are cases where we need to share this state across multiple components or make it accessible globally. In such scenarios, we need a different solution. React provides the [Context API↗](https://react.dev/reference/react/createContext), but there are also state management libraries like [Nano Stores↗](https://github.com/nanostores/nanostores), [Zustand↗](https://github.com/pmndrs/zustand), [Jotai↗](https://jotai.org/), [Redux Toolkit↗](https://redux-toolkit.js.org/) and many more.

I’ve had great experiences with both Zustand and Nano Stores. Recently, I’ve been favoring Nano Stores due to its simpler API and smaller size. Both are solid choices, and a nice bonus is that they work outside React components too.

Below is an example of Nano Stores in action in the codebase:

- [Session store](../src/stores/sessionStore/sessionStore.ts)
- [Account usage](../src/features/bootstrap/components/privateLayout/toolbar/profileDropdown.tsx)

## Form management

Forms are a common feature on almost every website. While it's possible to manage forms in React manually, using a library makes the process much easier—especially for complex forms or those spanning multiple components. Popular form management solutions include [React Hook Form↗](https://react-hook-form.com/) and [Formik↗](https://formik.org/).

I recommend using React Hook Form as it is the most popular and well-maintained option. Although it has a few quirks, it can save you a significant amount of time. Here's an example of a form implemented with this library:

- [Form to add an item to the shopping list](../src/features/shoppingLists/components/shoppingListPage/addItemForm/addItemForm.tsx)
- [Custom hook for the add item form](../src/features/shoppingLists/components/shoppingListPage/addItemForm/useAddItemForm.ts)

## Internationalization

Translating your application into multiple languages is key to reaching a wider audience. In the React ecosystem, there are several tools to help with this. I opted for [Nano Stores I18n↗](https://github.com/nanostores/i18n) since I was already using Nano Stores, and it’s lightweight, TypeScript-friendly, and lets you build custom transformations.

Here’s how it was integrated into the project:

- [Internationalization configuration](../src/i18n/i18nProvider.ts)
- [App messages in english](../src/i18n/i18nMessages.ts)
- [App messages in other languages](../src/i18n/i18n-fr-FR.json)
- [Usage example](../src/features/shoppingLists/components/shoppingListPage/listStatsView/listStatsView.tsx)

## Styling

There are many options and approaches for handling CSS in modern applications. Here are some of the most popular ones:

- [Tailwind CSS↗](https://tailwindcss.com/) - provides utility classes that can be used directly in the markup
- [Bootstrap↗](https://getbootstrap.com/) - one of the oldest CSS libraries for quickly building projects
- [Styled Components↗](https://styled-components.com/) - enables styling components directly within JavaScript
- [CSS Modules↗](https://github.com/css-modules/css-modules) - ensures CSS isolation by preventing style conflicts between components
- [SASS↗](https://sass-lang.com/) - extends the CSS language with additional features

Personally, I’m not a fan of Tailwind CSS because it abstracts the CSS language behind custom classes. Bootstrap feels unnecessary for most projects unless you’re building a quick prototype. I also avoid CSS-in-JS solutions like Styled Components, as they break the separation of concerns principle. Instead, I typically use CSS Modules along with the SASS preprocessor in my projects.

Additionally, I’ve implemented a custom CSS variable system inspired by the lightweight library [Open Props↗](https://open-props.style/). Using a variable system ensures a consistent UI and provides a central place to control styles. By adjusting variables like font sizes, spacing, or colors, you can easily modify the look and feel of the entire application.

In the shopping list project, I’ve included such a variable system. You can find it [here](../src/styles/varSystem) and explore any component CSS to see how it’s used.

## Mobile support

Current statistics show that most web traffic comes from mobile devices. Therefore, I believe it’s essential for any application to provide a mobile-friendly version. Fortunately, advancements in CSS over the past few years have made this increasingly easier to achieve.

For the shopping list application, I implemented the mobile version using two essential utilities. The first is the [`useMatchMediaQuery`](../src/hooks/useMatchMediaQuery.ts) hook, which allows toggling component parts based on device size. The second is the standard CSS media query rule. A good example of this approach can be seen in the [`privateLayout`](../src/features/bootstrap/components/privateLayout/privateLayout.tsx) component.
