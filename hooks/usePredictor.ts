import { useState } from 'react';
export const UsePredictor = () => {
  const [prediction, setPrediction] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const predictImage = async (imageUri: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('https://your-predictor-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUri }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPrediction(data);
    } catch (error) {
      console.error('Error fetching prediction:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { prediction, predictImage, isLoading };
};
