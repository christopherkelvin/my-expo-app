import { useEffect, useState } from 'react';
export const UseDiseaseInfo = () => {
  const [diseaseInfo, setDiseaseInfo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [disease, setDisease] = useState<string | null>(null);
  useEffect(() => {
    if (disease) {
      setIsLoading(true);
      fetch(`http://192.168.0.105:4000/disease/${disease}`)
        .then((response) => response.json())
        .then((data) => {
          setDiseaseInfo(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching disease info:', error);
          setIsLoading(false);
        });
    }
  }, [disease]);
  return {
    diseaseInfo,
    isLoading,
    setDisease,
  };
};
