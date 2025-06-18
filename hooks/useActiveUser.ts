import { useState, useEffect, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
export const useActiveUser = () => {
  const [activeUser, setActiveUser] = useState(null);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading) {
      setActiveUser(user);
    }
  }, [user, loading]);

  return activeUser;
};