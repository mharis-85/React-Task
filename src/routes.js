import Signup from "views/Pages/Signup";
import Signin from "views/Pages/Signin";
import Dashboard from "views/Pages/Dashboard";

const dashRoutes = [
  {
    path: "/signup",
    name: "Sign Up",
    component: Signup,
    layout: "/app"
  },
  {
    path: "/signin",
    name: "Sign In",
    component: Signin,
    layout: "/app"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/app"
  }
];
export default dashRoutes;
