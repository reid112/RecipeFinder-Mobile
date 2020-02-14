import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import FoodScreen from '../screens/FoodScreen';
import DrinksScreen from '../screens/DrinksScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Food';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Food"
        component={FoodScreen}
        options={{
          title: 'Food',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-pizza" />,
        }}
      />
      <BottomTab.Screen
        name="Drinks"
        component={DrinksScreen}
        options={{
          title: 'Drinks',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-beer" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Food':
      return 'Food';
    case 'Drinks':
      return 'Drinks';
  }
}
