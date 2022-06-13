import React from 'react';
// router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// styles
import './App.css';
import Header from './components/organism/Header/Header';
import UserNavCarousell from './components/organism/UserNavCarousell/UserNavCarousell';
import UserRepositories from './components/organism/UserRepositories/UserRepositories';
// components
import UserProfile from './pages/UserProfile/UserProfile';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <UserProfile />
      </BrowserRouter>

    </div>
  );
}

export default App;
