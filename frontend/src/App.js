import React, { useEffect, useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen px-4 py-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">PulsePro</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
      <Dashboard />
    </div>
  );
};

export default App;