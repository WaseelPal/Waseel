import Contact from "./pages/Cart"
import Cart from "./pages/Contact"
import Home from "./pages/Home"
import signIn from "./pages/Signin";


const routes = [
    {
        path:"/contact",
        components: Contact,
    },
    {
        path: "/cart",
        components: Cart,
    },
    {
        path: "/home",
        components: Home
    },
    {
        path: "/signIn",
        components: signIn
    }

]
export default routes;