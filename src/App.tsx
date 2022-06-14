import React from 'react';
// router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// styles
import './App.css';
import Header from './components/organism/Header/Header';
// components
import UserProfile from './pages/UserProfile/UserProfile';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/user" element={<UserProfile />} />
          <Route path="/" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
