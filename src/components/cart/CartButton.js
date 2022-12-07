import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './CartButton.module.css';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const CartButton = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = cartItems.reduce((sum, obj) => { return sum + obj.quantity }, 0);

  return (
    <Link to='/cart'>
      <button className={classes.button}>
        <span><ShoppingCartRoundedIcon /></span>
        <span>CART</span>
        <span className={classes.badge}>{cartQuantity}</span>
      </button>
    </Link>
  );
};

export default CartButton;

