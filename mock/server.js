import jsonServer from 'json-server';

class Server {
  constructor({ port, delay }) {
    const server = jsonServer.create();
    const router = jsonServer.router('db.json');

    server.use((req, res, next) => this.#delayMiddleware(delay, next));

    // custom routes
    server.get('/shoppingLists/overview', (req, res) => {
      const shoppingLists = router.db.get('shoppingLists').value();
      res.json(this.#buildShoppingListsOverview(shoppingLists));
    });

    server.use(jsonServer.defaults());
    server.use(router);
    server.listen(port, () => console.log(`Mock server started on port ${port}`));
  }

  #delayMiddleware(delay, next) {
    const randomDelay = Math.floor(Math.random() * (delay.max - delay.min + 1)) + delay.min;
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

new Server({ port: 5001, delay: { min: 500, max: 1000 } });
