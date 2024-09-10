import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import store from "./Provider/Store.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <StrictMode>
      <AuthProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </AuthProvider>
    </StrictMode>
  </div>
);
