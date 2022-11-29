import { uiActions } from './ui-slice';
import { cartActions } from './dataslice';

export const fetchDummyData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://picsum.photos/v2/list'
      );

      if (!response.ok) {
        throw new Error('Could not fetch the data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const dummyAPIdata = await fetchData();
      console.log(dummyAPIdata);
      dispatch(
        cartActions.initiateDummy({
        items: dummyAPIdata || [],
         })
       );
    //    dispatch(cartActions.mapPics());
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching data failed!',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://react-http-6b4a6.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};