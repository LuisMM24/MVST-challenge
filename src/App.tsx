import React from 'react';
// styles
import './App.css';
// components
import UserProfile from './pages/UserProfile/UserProfile';

const App: React.FC = () => {
  return (
    <div className="App">
      <UserProfile />
    </div>
  );
}

export default App;
