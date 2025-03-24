import colors from 'constants/colors';
import { Switch } from 'react-native';
function Toggle(props: React.ComponentPropsWithoutRef<typeof Switch>) {
  return (
    <Switch
      trackColor={{
        true: colors.primary,
        false: colors.secondary,
      }}
      thumbColor="white"
      {...props}
    />
  );
}

export { Toggle };
