# Testing tools

Testing is essential for ensuring confidence in your implemented functionality and maintaining its reliability after multiple iterations of the code. There are three main types of tests: unit, integration, and end-to-end. Each serves a unique purpose, and the key is deciding what to test. As a general rule, focus on the critical, complex, and change-prone parts of the application.

## Unit tests

Unit tests validate the smallest unit of functionality, such as a piece of business logic, a component in isolation, or a utility function. These tests are most valuable for:

- complex business logic, such as algorithms
- components with intricate or non-trivial functionality

However, I don't think it is necessary to write unit tests for simple logic or basic components.

For unit testing, I recommend using [Vitest↗](https://vitest.dev/) with [Testing Library↗](https://testing-library.com/). You can find an example in the source code [here](../src/features/shoppingLists/services/shoppingListStatsService.test.ts).

## Integration tests

Integration tests verify how different parts of the application work together. I typically focus on testing larger components or entire pages, using a mocked backend. Like unit tests, prioritize substantial and critical parts of the application rather than straightforward components.

The same tools used for unit testing (Vitest and Testing Library) can be employed for integration tests. An example from the application can be found [here](../src/features/shoppingLists/components/shoppingListsPage/shoppingListsPage.test.tsx).

## End-to-end tests

End-to-end (E2E) tests assess the entire system, encompassing both the frontend and backend. These tests closely mimic how an end user interacts with the application. We usually organize our E2E tests in a separate project and focus on covering the main user flows.

For writing E2E tests, I recommend using [Playwright↗](https://playwright.dev/). Note that the shopping list app does not currently include E2E tests.

## Additional Resources

Here are some resources to help you get started with testing tools:

- [React testing for beginners↗](https://www.youtube.com/watch?v=8Xwq35cPwYg)
- [Introduction to Playwright↗](https://www.youtube.com/watch?v=lCb9JoZFpHI)
