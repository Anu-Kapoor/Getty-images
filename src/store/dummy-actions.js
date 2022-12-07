import { uiActions } from './ui-slice';
import { cartActions } from './dataslice';

export const fetchDummyData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://picsum.photos/v2/list'
      );

      if (!response.ok) {
        throw new Error('Could not fetch the photographs!');
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
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching photographs from HTTP fetch API failed!',
        })
      );
    }
  };
};

export const fetchDummyQuotes = () => {
  return async (dispatch) => {
    const fetchQuotes = async () => {
      const response = await fetch(
        'https://dummyjson.com/quotes'
      );

      if (!response.ok) {
        throw new Error('Could not fetch the quotes!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const dummyAPIdata = await fetchQuotes();
      console.log(dummyAPIdata);
      dispatch(
        cartActions.initiateQuotes({
          items: dummyAPIdata || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching quotes from HTTP fetch API failed!',
        })
      );
    }
  };
};

// export const fetchCartData = () => {
//   return async (dispatch) => {
//     const fetchData = async () => {
//       const response = await fetch(
//         'https://react-http-6b4a6.firebaseio.com/cart.json'
//       );

//       if (!response.ok) {
//         throw new Error('Could not fetch cart data!');
//       }

//       const data = await response.json();

//       return data;
//     };

//     try {
//       const cartData = await fetchData();
//       dispatch(
//         cartActions.replaceCart({
//           items: cartData.items || [],
//           totalQuantity: cartData.totalQuantity,
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: 'error',
//           title: 'Error!',
//           message: 'Fetching cart data failed!',
//         })
//       );
//     }
//   };
// };


// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         status: 'pending',
//         title: 'Sending...',
//         message: 'Sending cart data!',
//       })
//     );

//     const sendRequest = async () => {
//       const response = await fetch(
//         'https://react-http-6b4a6.firebaseio.com/cart.json',
//         {
//           method: 'PUT',
//           body: JSON.stringify({
//             items: cart.items,
//             totalQuantity: cart.totalQuantity,
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error('Sending cart data failed.');
//       }
//     };

//     try {
//       await sendRequest();

//       dispatch(
//         uiActions.showNotification({
//           status: 'success',
//           title: 'Success!',
//           message: 'Sent cart data successfully!',
//         })
//       );
//     } catch (error) {
//       dispatch(
//         uiActions.showNotification({
//           status: 'error',
//           title: 'Error!',
//           message: 'Sending cart data failed!',
//         })
//       );
//     }
//   };
// };