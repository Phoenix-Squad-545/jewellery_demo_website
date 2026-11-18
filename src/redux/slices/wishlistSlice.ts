import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../data/products";

const WISHLIST_STORAGE_KEY = "radha_gold_wishlist";

const loadInitialWishlist = (): Product[] => {
  try {
    const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

interface WishlistState {
  items: Product[];
  isWishlistOpen: boolean;
}

const initialState: WishlistState = {
  items: loadInitialWishlist(),
  isWishlistOpen: false,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const exists = state.items.some((item) => item.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        try {
          localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(state.items));
        } catch {
          // ignore
        }
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      try {
        localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(state.items));
      } catch {
        // ignore
      }
    },
    toggleWishlist: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
      try {
        localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(state.items));
      } catch {
        // ignore
      }
    },
    setWishlistOpen: (state, action: PayloadAction<boolean>) => {
      state.isWishlistOpen = action.payload;
    },
    clearWishlist: (state) => {
      state.items = [];
      try {
        localStorage.removeItem(WISHLIST_STORAGE_KEY);
      } catch {
        // ignore
      }
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  toggleWishlist,
  setWishlistOpen,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
