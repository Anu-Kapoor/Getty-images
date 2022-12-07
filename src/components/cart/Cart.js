import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const localSignin = localStorage.getItem("signin");
  const totalPrice = cartItems.reduce((sum, obj) => { return sum + obj.price }, 0);
  const totalQuan = cartItems.reduce((sum, obj) => { return sum + obj.quantity }, 0);

  return (
    <Card className={classes.cart}>
      <h2>Shopping Cart</h2>
      <h5>Items selected for purchase:  {totalQuan}     </h5>
      <div className={classes.right}>

        <h3>Subtotal: $  {totalPrice}  CAD   </h3>
      </div>


      {localSignin ? <div className={classes.right}>
        <Link to ='checkout'>
        <button>CONTINUE WITH PURCHASE</button>
        </Link>
        <button>CREATE QUOTE</button>
      </div>
        : <><h4>
          <Link to='/add-user'>Login to check out!</Link></h4></>}



      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              author: item.author,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>

    </Card>
  );
};

export default Cart;