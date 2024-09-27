import { createSlice } from "@reduxjs/toolkit";

import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import card6 from "../../assets/card2.jpg";

const initialState = {
 projects: [{
    image: card1,
    project_content: "Full Stack Project",
    project_name: "Amazon clone",
    projects_url: "https://my-first-amazon-clone-app.netlify.app"
 }, {
    image: card2,
    project_content: "Full Stack Project",
    project_name: "URL Short",
    projects_url: "https://my-first-url-shortener.netlify.app"
 }, {
    image: card3,
    project_content: "Full Stack Project",
    project_name: "Linked-In clone",
    projects_url: "https://link-in-4783a.firebaseapp.com"
 }, {
    image: card4,
    project_content: "Full Stack Project",
    project_name: "chat-app",
    projects_url: "https://my-first-mern-chat-app.netlify.app"
 }, {
    image: card5,
    project_content: "Front-End",
    project_name: "recipe",
    projects_url: "https://my-first-recipe-application.netlify.app"
 }, {
    image: card6,
    project_content: "Backend",
    project_name: "Hospital Management",
    projects_url: "https://wizz-hospital-mgmt.herokuapp.com"
 },]
};

export const navbarSlice = createSlice({
  name: "navbarValues",
  initialState,
  reducers: {
    setCard: (state, action) => {
      state.nav_active = action.payload;
    },
  },
});

// Export actions and reducer
export const { setCard } = navbarSlice.actions;
export default navbarSlice.reducer;
