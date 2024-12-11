type ShoppingListOverview = {
  readonly id: string;
  readonly name: string;
  readonly dueDate?: string;
  readonly category?: string;
  readonly stats: {
    readonly remainingCost: number;
    readonly remainingItems: number;
    readonly totalItems: number;
  };
};

export { type ShoppingListOverview };
