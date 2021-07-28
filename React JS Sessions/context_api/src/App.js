import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './context/ThemeContext';
import { ThemeContext } from './context/ThemeContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle/>
      </ThemeContextProvider>
      
    </div>
  );
}

export default App;
