import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Sport Shoes",
      description:
        "Sports Shoes for Men. Buy latest collection of men sports shoes / running shoes from top brands",
      price: 19.0,
      image:
        "https://img.joomcdn.net/75d6e546f93b3674b276a065a69e11ce7beadcf8_original.jpeg",
    },
    {
      id: 2,
      title: "Watch",
      description:
        "Get style inspiration from social influencers. Discover latest trends everyday. Explore new fashion styles, skincare and make-up tips from experts.",
      price: 150.0,
      image:
        "https://5.imimg.com/data5/KH/SA/DQ/SELLER-8652465/luxury-brand-naviforce-men-fashion-casual-watches-men-nf9124-available-in-5-colors--500x500.PNG",
    },
    {
      id: 3,
      title: "Blazer",
      description:
        "Shop for men blazer online in India at best prices.",
      price: 150.0,
      image:
        "https://josephturner.images.blucommerce.com/josephturner/product/Mens_Blue_Navy_Check_Dales_Tweed_Jacket_MJJTWDBNC_2.jpg?auto=format%2Ccompress&w=1650&h=2100&fit=fillmax&fill=solid&s=4ec4aef15e04b4be1dc18a50f0759a0c",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
