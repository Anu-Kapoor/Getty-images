import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuan=useSelector((state)=> state.cart.totalQuantity);
  const totalPrice=useSelector((state)=> state.cart.totalPrice);

  return (
    <Card className={classes.cart}>
      <h2>Shopping Cart</h2>
      <h5>Items selected for purchase:  {totalQuan}     </h5>
      <div className={classes.right}>
        
      <h3>Subtotal: $  {totalPrice}  CAD   </h3>
      <button>CONTINUE WITH PURCHASE</button>
      <button>CREATE QUOTE</button>
      </div>

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