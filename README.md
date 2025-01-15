# React CSR Base ⚙️

Your **starting kit** for building **clean and extensible client-side applications** in React.

## Motivation

Building a client-side application in React can be challenging. There are a lot of tools and libraries in the ecosystem. Although this may seem like a blessing, it can also turn into a curse. You have to go over them and decide what you need. But this takes time, a lot of time.

While exploring these tools, I realized the value of having a starter application. Admittedly, creating a universal starting point is difficult because every project is unique. However, I believe there are common patterns and features that most projects can benefit of. With this in mind, I created a repository to serve as a guideline for building my client-side applications. After working with this architecture for a while, I began to enjoy it. So I decided to share it with you. Hopefully it will benefit you as much as it has benefited me.

If this approach doesn’t align with your preferences and you’re looking for something more official, I’d recommend exploring [Vite↗](https://vite.dev/), [Next.js↗](https://nextjs.org/), or [Remix↗](https://remix.run/). Vite offers an excellent template for React applications, though it only includes React itself. On the other hand, Next.js and Remix provide much broader functionality but are primarily designed for server-side rendering (SSR).

## Overview

This repository contains a **shopping list application**, created to showcase best practices and recommended libraries. The goal was to have a minimal working example that incorporates the essential tools. I prioritized keeping the result clean, including only the most critical dependencies, and avoiding any unnecessary bloat. Hopefully, I achieved that. The application is not fully implemented and you are, of course, welcome to modify and adapt it to suit the needs of your own project.

The most import features included in the project are:

- feature based architecture
- client-side routing
- data fetching mechanism
- data store solution
- form data management
- internationalization support
- mobile support
- styling system

To help you better understand the reasoning behind certain decisions, I’ve added a few comments and references in the most critical parts of the application. Feel free to review them and explore the solution in detail.

Here’s a brief look at the app in action:

https://github.com/user-attachments/assets/fe08fa62-ec16-4dca-a73f-0db199621c04

## Details

- [Project structure](docs/projectStructure.md)
  - [Feature based architecture](docs/projectStructure.md#feature-based-architecture)
  - [Component split](docs/projectStructure.md#component-split)
  - [Principles](docs/projectStructure.md#principles)
- [Coding tools](docs/codingTools.md)
  - [Type safety](docs/codingTools.md#type-safety)
  - [Routing](docs/codingTools.md#routing)
  - [Data fetching](docs/codingTools.md#data-fetching)
  - [State management](docs/codingTools.md#state-management)
  - [Form management](docs/codingTools.md#form-management)
  - [Internationalization](docs/codingTools.md#internationalization)
  - [Styling](docs/codingTools.md#styling)
  - [Mobile support](docs/codingTools.md#mobile-support)
- [Testing tools](docs/testingTools.md)
  - [Unit tests](docs/testingTools.md#unit-tests)
  - [Integration tests](docs/testingTools.md#integration-tests)
  - [End-to-end tests](docs/testingTools.md#end-to-end-tests)
- [Assisting tools](docs/assistingTools.md)
  - [Linting and formatting](docs/assistingTools.md#linting-and-formatting)
  - [Build](docs/assistingTools.md#build)
  - [Bundle splitting](docs/assistingTools.md#bundle-splitting)
  - [IDE](docs/assistingTools.md#ide)
- [Bonus](docs/bonus.md)
  - [Initial loading](docs/bonus.md#initial-loading)
  - [Variable fonts](docs/bonus.md#variable-fonts)
  - [Services as classes](docs/bonus.md#services-as-classes)

## Installation

Follow the steps below to install the application for development:

- **Start the mock server**
  - open a terminal
  - go to the `mock` folder
  - run `npm install`
  - run `npm run dev`
- **Start the application**
  - open another terminal
  - go to the root folder
  - run `npm install`
  - run `npm run dev`

If everything was set up correctly, both the mocked backend server and the Vite frontend server should now be running.

To create a production build, run `npm run build` in the root folder. To preview it in Vite, run `npm run preview`.

## Building on top

If you're planning to build your next application using this project, this section will help you navigate and adjust the key parts:

- **Clean up the project**
  - Remove the `docs` folder and update the `README.md`
  - Remove or adjust the mock server
    - If you have a dedicated backend, delete the `mock` folder
    - If not, modify the mock data to suit your needs
- **Update project essentials**
  - Update `index.html` to reflect your brand (favicon, fonts, content placeholder)
  - Adjust `app.tsx`:
    - This is the root component of the React app
    - It initializes key dependencies (TanStack Query, internationalization, router)
    - Use this as a starting point to add or remove tools
- **Organize the `features` folder**
  - Keep the `bootstrap`
    - It contains functionality governing the entire app (e.g., layout, session management)
  - Remove other feature folders, but inspect `shoppingLists` to understand how a feature is implemented
  - Add new folders for your specific features

Happy coding! 😉
