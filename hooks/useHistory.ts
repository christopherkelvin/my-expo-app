import { useState, useEffect } from 'react';
import { getApiBaseUrl } from 'utils/apiConfig';
export const useHistory = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  const fetchHistory = async () => {
    try {
      const apiBaseUrl = await getApiBaseUrl();
      console.log('API Base URL:', apiBaseUrl);
      const response = await fetch(`http://${apiBaseUrl}:8000/predictions`);
      const data = await response.json();

      const formatted = data.map((item: any) => {
        const dateObj = new Date(item.created_at);

        const year = dateObj.getFullYear();
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const day = String(dateObj.getDate()).padStart(2, '0');

        const hours = String(dateObj.getHours()).padStart(2, '0');
        const minutes = String(dateObj.getMinutes()).padStart(2, '0');
        return {
          ...item,
          date: `${year}-${month}-${day}`,
          time: `${hours}:${minutes}`,
        };
      });

      setHistory(formatted);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return { history, loading, error, refetch: fetchHistory };
};
