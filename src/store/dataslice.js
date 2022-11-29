import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'cart',
  initialState: {
    pics: [],
    selectedPic: null,
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    changed: false,
  },
  reducers: {

    initiateDummy(state, action) {
      state.pics = action.payload.items;
    },

    setSelectedpic(state, action){
      const ID = action.payload;
      state.selectedPic= state.pics.find(item => item.id == ID);
    },

    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
    //  const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
   //   if (!existingItem) {
        state.totalPrice= state.totalPrice + newItem.cost;
        state.items.push({
        id: state.selectedPic.id,
        author: state.selectedPic.author,
          price: newItem.cost,
          quantity: 1,
        //  name: newItem.title,
        });
   //   } 
      // else {
      //   // existingItem.quantity++;
      //   state.totalPrice = existingItem.totalPrice + newItem.price;
      // }
    },

    updateCartItemPrice(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((x)=>x.id === newItem.id); 
      if(existingItem){
        state.totalPrice = (state.totalPrice - existingItem.price + newItem.cost);
        existingItem.price = newItem.cost;
      }
      
      
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalPrice=state.totalPrice-existingItem.price;
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