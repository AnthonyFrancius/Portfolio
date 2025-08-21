import { createHashRouter } from "react-router-dom";
import App from "./src/App.tsx";

export const router = createHashRouter([{ path: "/", element: <App /> }]);
