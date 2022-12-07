import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../store/dataslice';
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';

const CartItem = (props) => {

  const dispatch = useDispatch();
  const { id, price, author, quantity } = props.item;

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
      })
    );
  };

  const Edithandler = () => {
    dispatch(cartActions.setSelectedpic(id));
  }


  return (
    <div className={classes.item}>
      <header>
        <Tooltip title="update size">
          <Link onClick={Edithandler} to={`/imageDetail/${id}`}>
            <h3>{author}</h3>
            <div className={classes.price}>
              ${price.toFixed(2)}{' '}
              <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
            </div>
          </Link>
        </Tooltip>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span> <br />
          id: #{id}
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          {/* <button onClick={addItemHandler}>+</button> */}
        </div>
      </div>
    </div >
  );
};

export default CartItem;