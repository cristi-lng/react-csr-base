import { i18nProvider } from 'src/i18n/i18nProvider';

const $i18nMessages = i18nProvider('common', {
  addList: 'Add list',
  admin: 'Admin',
  cancel: 'Cancel',
  categories: 'Categories',
  category: 'Category',
  delete: 'Delete',
  dueDate: 'Due date',
  genericErrorBrief: 'An error occurred. Please try again.',
  genericErrorContact: 'If the error persists please contact customer support.',
  genericErrorDetails: 'Please try to perform your last action again.',
  genericErrorTitle: 'An error occurred',
  items: 'Items',
  listDetails: 'List Details',
  logout: 'Logout',
  name: 'Name',
  noListItems: 'There are no items in this shopping list',
  noShoppingList: "You don't have any shopping list",
  notFoundDetails: "The page you're looking for doesn't exist or has been moved.",
  notFoundTitle: 'Oops! Page not found',
  paidAmount: 'Paid amount:',
  price: 'Price',
  products: 'Products',
  purchasedItems: 'Purchased items:',
  quantity: 'Quantity',
  regular: 'Regular',
  remainingAmount: 'Remaining amount:',
  save: 'Save',
  searchForAnything: 'Search for anything',
  settings: 'Settings',
  shoppingLists: 'Shopping Lists',
  specificErrorDetails: 'This is just an example of a specific error thrown from the route',
  specificErrorTitle: 'Specific error',
  totalAmount: 'Total amount:',
});

type I18nMessageKey = keyof ReturnType<typeof $i18nMessages.get>;

export { $i18nMessages, type I18nMessageKey };
