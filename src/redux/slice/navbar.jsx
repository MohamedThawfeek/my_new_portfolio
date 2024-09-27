import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: ["about", "service", "project", "blog", "book a call"],
  navbar_title: "Thawfeek",
  nav_active: "",
};

export const navbarSlice = createSlice({
  name: "navbarValues",
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.nav_active = action.payload;
    },
  },
});

// Export actions and reducer
export const { setActive } = navbarSlice.actions;
export default navbarSlice.reducer;
