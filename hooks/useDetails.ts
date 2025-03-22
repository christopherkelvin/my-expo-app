import { FakeUsers } from 'constants/fakeUsers.data';
import { useEffect, useState } from 'react';

export const useUserDetails = () => {
  const [user, setUser] = useState<{ id: number; name: string; email: string }[]>([]);
  useEffect(() => {
    const user = FakeUsers.filter((user) => user.id === 1);
    setUser(user);
  }, []);
  return user;
};
