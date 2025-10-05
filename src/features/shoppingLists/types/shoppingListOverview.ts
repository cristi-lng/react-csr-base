type ShoppingListOverview = {
  readonly id: string;
  readonly name: string;
  readonly dueDate?: string | null;
  readonly category?: string | null;
  readonly stats: {
    readonly remainingAmount: number;
    readonly remainingItems: number;
    readonly totalItems: number;
  };
};

export type { ShoppingListOverview };
