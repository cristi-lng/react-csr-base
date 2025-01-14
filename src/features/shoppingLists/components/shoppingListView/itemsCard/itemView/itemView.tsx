import { useFormContext } from 'react-hook-form';
import classNames from 'classnames';

import { ListFormData } from '~shoppingLists/components/shoppingListView/listFormData';
import { InputCheckbox } from 'src/components/inputCheckbox/inputCheckbox';
import { FormatAmount } from 'src/formatters/amount/formatAmount';
import classes from './itemView.module.scss';

type ItemViewProps = {
  itemIndex: number;
  deleteItem: (itemIndex: number) => void;
};

function ItemView({ itemIndex, deleteItem }: ItemViewProps) {
  const { watch, register } = useFormContext<ListFormData>();
  const item = watch(`items.${itemIndex}`);

  return (
    <div className={classNames(classes.itemView, { [classes.purchased]: item.purchased })}>
      <InputCheckbox {...register(`items.${itemIndex}.purchased`)} />
      <div>
        <div className={classes.itemView_name}>{item.name}</div>
        <div className={classes.itemView_quantity}>{item.quantity}</div>
      </div>
      <div className={classes.itemView_price}>
        <FormatAmount amount={item.price!} />
      </div>
      <button
        className={classes.itemView_delete}
        type="button"
        onClick={() => deleteItem(itemIndex)}
        aria-label="delete item"
      >
        <span className="icon-trash"></span>
      </button>
    </div>
  );
}

export { ItemView };
