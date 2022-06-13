import React from 'react';
// router
import { BrowserRouter } from 'react-router-dom';
// styles
import './App.css';
import Header from './components/organism/Header/Header';
import UserNavCarousell from './components/organism/UserNavCarousell/UserNavCarousell';
// components
import UserProfile from './pages/UserProfile/UserProfile';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />
        <div className='AppBodySection'>
          <UserProfile />
          <UserNavCarousell />
          <hr />

        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
