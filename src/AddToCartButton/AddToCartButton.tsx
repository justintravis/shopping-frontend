import { CartActions, CartItem, Item } from '../models/store-models';
import { useCartDispatch } from '../CartContext';

interface Props {
  item: Item
}

const AddToCartButton = ({ item }: Props) => {
  const dispatch = useCartDispatch();

  return (
    <button onClick={ () => dispatch({ type: CartActions.Add, item }) }>Add to Cart</button>
  )
}

export default AddToCartButton;