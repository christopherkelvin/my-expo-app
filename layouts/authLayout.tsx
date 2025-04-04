import { LoginAdvertisement } from 'components/LoginAdvertisement';
import { ReactNode } from 'react';
import { View } from 'react-native';
export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <View
      className="bg-main"
      style={{
        height: '100%',
      }}>
      <LoginAdvertisement />
      {children}
    </View>
  );
};
