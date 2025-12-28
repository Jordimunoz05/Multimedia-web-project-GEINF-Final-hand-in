import React from 'react';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';

const MySelection = ({ cart, removeFromCart, addToCart, decreaseQuantity }) => {
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 style={{ marginBottom: '2rem' }}>My Selection</h1>

            {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                    <FaShoppingCart style={{ fontSize: '3rem', color: '#ccc', marginBottom: '1rem' }} />
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>Your selection is currently empty.</p>
                    <a href="/activities" className="btn" style={{ marginTop: '1rem', display: 'inline-block' }}>Browse Activities</a>
                </div>
            ) : (
                <div style={{ display: 'grid', gap: '2rem' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                        {cart.map(item => (
                            <div key={item.id} style={{
                                display: 'flex',
                                padding: '1.5rem',
                                borderBottom: '1px solid #eee',
                                alignItems: 'center'
                            }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: '8px', overflow: 'hidden', marginRight: '1.5rem', flexShrink: 0 }}>
                                    <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ margin: '0 0 0.5rem' }}>{item.title}</h3>
                                    <p style={{ margin: 0, color: '#666' }}>
                                        {item.price === 0 ? 'Free' : `${item.price} €`}
                                    </p>
                                </div>
                                <div style={{ textAlign: 'right', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <button
                                            onClick={() => decreaseQuantity(item)}
                                            style={{
                                                background: '#ddd',
                                                border: 'none',
                                                width: '30px',
                                                height: '30px',
                                                borderRadius: '50%',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 'bold',
                                                fontSize: '1.2rem'
                                            }}
                                        >
                                            -
                                        </button>
                                        <span style={{ fontWeight: 'bold', fontSize: '1.2rem', minWidth: '30px', textAlign: 'center' }}>
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => addToCart(item)}
                                            style={{
                                                background: '#ddd',
                                                border: 'none',
                                                width: '30px',
                                                height: '30px',
                                                borderRadius: '50%',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 'bold',
                                                fontSize: '1.2rem'
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', minWidth: '80px' }}>
                                        {item.price * item.quantity} €
                                    </span>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        style={{
                                            color: '#ff4d4d',
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.25rem'
                                        }}
                                    >
                                        <FaTrash /> Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                        <div style={{ padding: '2rem', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '2rem', backgroundColor: '#f9f9f9' }}>
                            <div style={{ fontSize: '1.5rem' }}>
                                Total: <span style={{ fontWeight: 'bold' }}>{totalPrice} €</span>
                            </div>
                            <button className="btn" onClick={() => alert('Proceeding to checkout/reservation...')}>
                                Confirm & Pay
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MySelection;
