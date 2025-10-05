type ShoppingListDetails = {
  readonly id: string;
  readonly name: string;
  readonly dueDate?: string | null;
  readonly category?: string | null;
  readonly items: ShoppingListItem[];
};

type ShoppingListItem = {
  readonly name: string;
  readonly quantity: string;
  readonly price: number;
  readonly purchased: boolean;
};

type ShoppingListStats = {
  remainingAmount: number;
  remainingItems: number;
  paidAmount: number;
  paidItems: number;
  totalAmount: number;
  totalItems: number;
};

export type { ShoppingListDetails, ShoppingListItem, ShoppingListStats };
