import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Activities from './pages/Activities';
import MySelection from './pages/MySelection';
import Calendar from './pages/Calendar';

function App() {
  const [cart, setCart] = React.useState([]);

  const addToCart = (activity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === activity.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === activity.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...activity, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const decreaseQuantity = (activity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === activity.id);
      if (existingItem.quantity === 1) {
        return prevCart.filter(item => item.id !== activity.id);
      }
      return prevCart.map(item =>
        item.id === activity.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/activities"
              element={
                <Activities
                  cart={cart}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  decreaseQuantity={decreaseQuantity}
                />
              }
            />
            <Route path="/calendar" element={<Calendar />} />
            <Route
              path="/selection"
              element={
                <MySelection
                  cart={cart}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  decreaseQuantity={decreaseQuantity}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
