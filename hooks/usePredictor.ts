import { useState } from 'react';

export const UsePredictor = () => {
  const [prediction, setPrediction] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const predictImage = async (imageUri: string) => {
    setIsLoading(true);

    const formData = new FormData();
    formData.append('image', {
      uri: imageUri,
      type: 'image/jpeg', // change to image/png if needed
      name: 'photo.jpg',
    } as any); // React Native needs this cast

    try {
      const response = await fetch('http://192.168.137.1:4000/predict/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
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
