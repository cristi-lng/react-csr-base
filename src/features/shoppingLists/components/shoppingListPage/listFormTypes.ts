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

export type { ListFormData, ItemFormData };
