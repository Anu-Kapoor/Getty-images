import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'cart',
  initialState: {
    pics: [],
    quotes: [],
    selectedPic: null,
    items: [],
    changed: false,
  },
  reducers: {

    initiateDummy(state, action) {
      state.pics = action.payload.items;
    },

    initiateQuotes(state, action) {
      state.quotes = action.payload.items;
    },


    setSelectedpic(state, action) {
      const ID = action.payload;
      state.selectedPic = state.pics.find(item => item.id === ID);
    },

    replaceCart(state, action) {
      state.items = action.payload.items || [];
      // action.payload.totalQuantity ? (state.totalQuantity = action.payload.totalQuantity)
      // :(state.totalQuantity=0);;
      // action.payload.totalPrice ? (state.totalPrice = action.payload.totalPrice)
      // :(state.totalPrice=0);
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      // state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
     //   state.totalPrice = state.totalPrice + newItem.cost;
        state.items.push({
          id: state.selectedPic.id,
          author: state.selectedPic.author,
          price: newItem.cost,
          quantity: 1,
          //  name: newItem.title,
        });
      }
      else {
        existingItem.quantity++;
        state.totalPrice = state.totalPrice + newItem.price;
      }
    },

    updateCartItemPrice(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((x) => x.id === newItem.id);
      state.changed = true;
      if (existingItem) {
    //    state.totalPrice = (state.totalPrice - (existingItem.price * existingItem.quantity) + (newItem.cost * existingItem.quantity));
        existingItem.price = newItem.cost;
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
//      state.totalQuantity--;
      state.totalPrice = state.totalPrice - existingItem.price;
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = dataSlice.actions;

export default dataSlice;