# Assisting tools

## Linting and formatting

Linting involves analyzing the source code to identify potential errors. Formatting, on the other hand, focuses on arranging the code according to style guides and conventions. In JavaScript, two widely used tools for these purposes are [ESLint↗](https://eslint.org/) and [Prettier↗](https://prettier.io/). Most frameworks and libraries you use will likely have an ESLint plugin that should be included in your project. It's highly recommended to use an IDE that supports these tools, enabling real-time linting and formatting.

ESLint provides the flexibility to customize its rules. For project dependencies, it's best to start with the recommended rules and build on them as needed. You can also define your own to enforce specific coding standards. I encourage you to take advantage of this feature by creating rules that align with your project's unique requirements. Here are the custom rules I’ve implemented in this application:

- private modules within a feature cannot be imported outside that feature
- relative imports are not allowed
- default exports are not allowed

You can view the linting configuration [here](../eslint.config.js) and the formatting configuration [here](../.prettierrc.json).

## Build

Shipping your frontend application as-is is no longer an option. You need a build tool to transform it into a production-ready version. While there are many options available, one that has gained significant traction recently—and I highly recommend—is [Vite↗](https://vite.dev/). Another popular choice is [Webpack↗](https://webpack.js.org/), but I often find it overly complex, and many developers have started migrating away from it.

Vite offers more than just creating a production bundle. It is a system that integrates various tools to streamline development. Here are a few examples:

- it comes with sensible defaults, significantly reducing configuration time
- provides templates to quickly start projects with different frameworks
- enhances the development process with features like a development server and hot module reloading

You can find all the Vite configurations for this project [here](../build).

## Bundle splitting

In client-side applications, every new feature increases the size of the JavaScript bundle sent to the browser. This can result in slower load times and a heavier application, especially on slow networks. To address this, we typically split the production bundle into smaller pieces, delivering only the code needed at any given moment.

Finding an effective splitting strategy is not trivial and largely depends on the specific requirements of the project. For the shopping list application, I adopted a page-based strategy—a common approach that creates a separate bundle for each page in the application. This was achieved by leveraging the features provided by the router. You can see an example of this strategy applied to the shopping list pages [here](../src/features/shoppingLists/index.tsx).

If the page-based strategy does not meet your needs or you prefer a different approach, feel free to adjust it to better suit your requirements.

## IDE

For working on frontend applications, I highly recommend [Visual Studio Code↗](https://code.visualstudio.com/). It is fast, lightweight, and offers a vast array of extensions to support any development need. While I don’t use many extensions, here are a few that I consistently install:

- [ESLint↗](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier↗](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [CSS Var Complete↗](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar)
- [Code Spell Checker↗](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

Additionally, I typically configure my editor with the following settings:

- set `Editor: Default Formatter` to Prettier
- enable `Editor: Format On Save`
- configure `TypeScript › Preferences: Import Module Specifier` to `non-relative`
