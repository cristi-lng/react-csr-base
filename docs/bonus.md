# Bonus

## Initial loading

When a client-side application is first loaded, the initial HTML is often empty. This happens because the JavaScript, CSS, and other resources required to render the page haven’t been fetched yet, resulting in a poor user experience. To address this, we can include a content loading placeholder, which provides visual feedback while the resources are being loaded.

For this approach to be effective, the placeholder must be inlined directly into the HTML. It's crucial to keep the size of the resources used by the placeholder as small as possible; otherwise, it defeats the purpose of improving the loading experience.

You can see the loading placeholder in action at the beginning of the demo video on the homepage. For the code implementation, refer to the markup in [`index.html`](../src/index.html) and the associated CSS in [`contentPlaceholder.scss`](../src/styles/contentPlaceholder.scss). Keep in mind that during development mode, the placeholder resources are not inlined in the HTML. To see them inlined, you’ll need to generate the production build.

## Variable fonts

In web applications, multiple font variants are often required, such as regular, bold, or italic. Traditionally, each variant needed a separate file, which could quickly add up in file size.

Variable fonts offer a more efficient solution. A variable font is a single file that includes all the weights and styles supported by the font. While its size may be slightly larger than a single variant of a traditional font, it is significantly smaller when multiple variants are needed. Additionally, I recommend using the `WOFF2` format, as it provides the best compression and is widely supported across browsers.

In this application, I’m using the [`Quicksand`](../src/assets/fonts/quicksand-variable.woff2) font. You can view the font declaration [here](../src/styles/fontDeclaration/quicksand.scss). Note that the font weight is specified as a range, reflecting its support for multiple weights.

## Services as classes

In this project, services are implemented using JavaScript classes, which contrasts with the functional approach used for components and hooks. I find classes to be a better fit for services, and here are some reasons behind this choice:

- creating multiple instances of a service is simpler with classes when needed
- it's more obvious which functions are public and which are private
- it’s easier to identify the specific service being used when invoking its functions

That said, if you prefer a consistent functional approach or dislike using classes, you don't have to follow this pattern. Services can be equally implemented using plain functions if that aligns better with your preferences.
