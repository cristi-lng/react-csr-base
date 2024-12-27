type ShoppingListOverview = {
  readonly id: string;
  readonly name: string;
  readonly dueDate?: string;
  readonly category?: string;
  readonly stats: {
    readonly remainingAmount: number;
    readonly remainingItems: number;
    readonly totalItems: number;
  };
};

export { type ShoppingListOverview };
