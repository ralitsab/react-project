import { useState, useEffect } from 'react';
import { fetchOrders } from '../services/ordersService';

export const useOrders = (userId) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getOrders = async () => {
        try {
          setLoading(true);
          const ordersData = await fetchOrders(userId);
          setOrders(ordersData);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      getOrders();
    }, [userId]);
  
    return { orders, loading, error };
  };