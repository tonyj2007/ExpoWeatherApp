import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabs from '@src/components/bottom-tabs/bottom-tabs';

const Tabs = createBottomTabNavigator();

const AppContainer = () => {
  return <BottomTabs />;
};

export default AppContainer;
