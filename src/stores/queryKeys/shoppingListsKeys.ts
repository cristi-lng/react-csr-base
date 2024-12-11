const shoppingListsKeys = {
  all: ['shoppingLists'] as const,
  listsOverview: () => [...shoppingListsKeys.all, 'overview'] as const,
  listDetails: (id: string) => [...shoppingListsKeys.all, id] as const,
};

export { shoppingListsKeys };
