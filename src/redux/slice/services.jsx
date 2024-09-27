import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    service_box: ["web design", "front-end development", "back-end development"],
    service_box2: ["react js", "node js", "mongo DB", "react-native"],
    service_box3: ["clean and functional", "device and user friendly", "efficient and maintainable"],

 
};

export const serviceSlice = createSlice({
  name: "serviceValues",
  initialState,
  reducers: {
    setServices: (state, action) => {
     
    },
  },
});

// Export actions and reducer
export const { setServices } = serviceSlice.actions;
export default serviceSlice.reducer;
