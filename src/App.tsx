import React from "react";
// router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// styles
import "./App.css";
import Header from "./components/organism/Header/Header";
// components
import UserProfile from "./pages/UserProfile/UserProfile";
import UserProfileProvider from "./context/UserProfileContext";
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/*"
            element={
              <UserProfileProvider>
                <UserProfile />
              </UserProfileProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
