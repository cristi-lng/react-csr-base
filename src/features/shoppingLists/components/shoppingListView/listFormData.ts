type ListFormData = {
  name?: string | null | undefined;
  dueDate?: string | null | undefined;
  category?: string | null | undefined;
  items?: ItemFormData[] | undefined;
};

type ItemFormData = {
  name?: string | null | undefined;
  quantity?: string | null | undefined;
  price?: number | null | undefined;
  purchased?: boolean | null | undefined;
};

class ItemsStats {
  remainingAmount: number;
  paidAmount: number;
  totalAmount: number;
  remainingItems: number;
  paidItems: number;
  totalItems: number;

  constructor() {
    this.remainingAmount = 0;
    this.paidAmount = 0;
    this.totalAmount = 0;
    this.remainingItems = 0;
    this.paidItems = 0;
    this.totalItems = 0;
  }
}

export { type ListFormData, type ItemFormData, ItemsStats };
