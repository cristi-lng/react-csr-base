import jsonServer from 'json-server';

function startServer({ port, delayInterval }) {
  const server = jsonServer.create();
  const router = jsonServer.router('db.json');

  server.use((_req, _res, next) => delayMiddleware(next));
  // custom route
  server.get('/shoppingLists/overview', (_req, res) => {
    const shoppingLists = router.db.get('shoppingLists').value();
    res.json(buildShoppingListsOverview(shoppingLists));
  });

  server.use(jsonServer.defaults());
  server.use(router);
  server.listen(port, () => console.log(`Mock server started on port ${port}`));

  function delayMiddleware(next) {
    const randomDelay = Math.floor(Math.random() * (delayInterval[1] - delayInterval[0] + 1)) + delayInterval[0];
    setTimeout(() => next(), randomDelay);
  }

  function buildShoppingListsOverview(shoppingLists) {
    return shoppingLists.map((shoppingList) => {
      const { items, ...rest } = shoppingList;
      const stats = items.reduce(
        (stats, item) => {
          if (!item.purchased) {
            stats.remainingAmount += item.price;
            stats.remainingItems++;
          }
          stats.totalItems++;
          return stats;
        },
        { remainingAmount: 0, remainingItems: 0, totalItems: 0 },
      );
      return { ...rest, stats };
    });
  }
}

startServer({ port: 5001, delayInterval: [500, 1000] });
