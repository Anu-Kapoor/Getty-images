import { useDispatch } from 'react-redux';

import classes from './CartItem.module.css';
 import { cartActions } from '../../store/dataslice';

const CartItem = (props) => {
const dispatch = useDispatch();

  const { id, price, author, quantity } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  // const addItemHandler = () => {
  //   dispatch(
  //     cartActions.addItemToCart({
  //       id,
  //       title,
  //       price,
  //     })
  //   );
  // };

  return (
    <li className={classes.item}>
      <header>
        <h3>{author}</h3>
        <div className={classes.price}>
          ${price.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          id: #{id} <br/>
         
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          {/* <button onClick={addItemHandler}>+</button> */}
        </div>
      </div>
    </li>
  );
};

export default CartItem;