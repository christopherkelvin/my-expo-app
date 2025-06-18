import { createStackNavigator } from "@react-navigation/stack";
import { HistoryScreen } from "./historyScreen";

const Stack= createStackNavigator();
export const HistoryNavigator = () => {
    return (
        <HistoryScreen />
    );
}