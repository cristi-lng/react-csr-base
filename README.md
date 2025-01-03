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
  - [Testing](docs/codingTools.md#testing)

## Installation and usage
