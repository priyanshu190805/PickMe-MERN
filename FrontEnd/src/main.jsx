import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext.jsx";
import CaptainContext from "./context/CaptainContext.jsx";
import SocketContext from "./context/SocketContext.jsx";
import ThemeContext from "./context/ThemeContext.jsx";
import "./index.css";
import PopupContext from "./context/PopupContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PopupContext>
      <CaptainContext>
        <UserContext>
          <SocketContext>
            <BrowserRouter>
              <ThemeContext>
                <App />
              </ThemeContext>
            </BrowserRouter>
          </SocketContext>
        </UserContext>
      </CaptainContext>
    </PopupContext>
  </StrictMode>
);
