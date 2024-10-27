import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./authRoutes";
import mainRoutes from "./mainRoutes";

const router = createBrowserRouter([...authRoutes , ...mainRoutes]);

export default router;
