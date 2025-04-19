import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Upload from './component/Upload';
import Profile from './pages/profile';
import Dashboard from './pages/Dashboard'; // Make sure this exists

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'upload':
        return <Upload />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div>
      <Navbar onSectionChange={setActiveSection} />
      {renderSection()}
    </div>
  );
}

export default App;
