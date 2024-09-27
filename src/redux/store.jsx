import { configureStore } from "@reduxjs/toolkit";

import Navber from "./slice/navbar";
import Services from "./slice/services";
import Projects from "./slice/projects"
import Blogs from "./slice/blogs"


const store = configureStore({
  reducer: {
    navbar: Navber,
    services: Services,
    projects: Projects,
    blogs: Blogs
  },
});

export default store;
