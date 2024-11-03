import jsonServer from 'json-server';

class Server {
  constructor({ port, delayInterval }) {
    const server = jsonServer.create();
    const router = jsonServer.router('db.json');

    server.use((req, res, next) => this.#delayMiddleware(delayInterval, next));

    // custom routes
    server.get('/shoppingLists/overview', (req, res) => {
      const shoppingLists = router.db.get('shoppingLists').value();
      res.json(this.#buildShoppingListsOverview(shoppingLists));
    });

    server.use(jsonServer.defaults());
    server.use(router);
    server.listen(port, () => console.log(`Mock server started on port ${port}`));
  }

  #delayMiddleware(delayInterval, next) {
    const randomDelay = Math.floor(Math.random() * (delayInterval[1] - delayInterval[0] + 1)) + delayInterval[0];
    setTimeout(() => next(), randomDelay);
  }

  #buildShoppingListsOverview(shoppingLists) {
    return shoppingLists.map((shoppingList) => {
      const { items, ...rest } = shoppingList;
      const stats = items.reduce(
        (stats, item) => {
          if (!item.purchased) {
            stats.remainingCost += item.price;
            stats.remainingItems++;
          }
          stats.totalItems++;
          return stats;
        },
        { remainingCost: 0, remainingItems: 0, totalItems: 0 },
      );
      return { ...rest, stats };
    });
  }
}

new Server({ port: 5001, delayInterval: [500, 1000] });
