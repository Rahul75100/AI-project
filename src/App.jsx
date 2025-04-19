import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Upload from './component/Upload';
import Profile from './pages/profile';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <h1>Welcome to EcoShop Dashboard</h1>;
      case 'upload':
        return <Upload />;
      case 'profile':
        return <Profile />;
      case 'insights':
        return <h2>📊 Insights coming soon!</h2>;
      case 'recommendations':
        return <h2>🌱 Smart Recommendations coming soon!</h2>;
      case 'logout':
        return <h2>🔒 You’ve been logged out (fake logout 😄)</h2>;
      default:
        return <h1>Section not found</h1>;
    }
  };

  return (
    <div>
      <Navbar onSectionChange={setActiveSection} activeSection={activeSection} />
      <div className="main-content">
        {renderSection()}
      </div>
    </div>
  );
}

export default App;
