import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { Provider } from 'react-redux'
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";

// import { router } from './routes'
// import { store } from './redux/store'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}>

</Provider> */}
    <RouterProvider router={router} />
  </StrictMode>
);
