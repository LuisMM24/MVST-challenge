import React from 'react';
// styles
import './App.css';
import Header from './components/organism/Header/Header';
// components
import UserProfile from './pages/UserProfile/UserProfile';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className='AppBodySection'>
        <UserProfile />
      </div>

    </div>
  );
}

export default App;
