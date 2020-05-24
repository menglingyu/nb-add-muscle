import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import UserScreen from '../screens/UserScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={ INITIAL_ROUTE_NAME }>
      <BottomTab.Screen
        name="训练"
        component={ HomeScreen }
        options={ {
          title: '训练',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={ focused } name="md-code-working" />,
        } }
      />
      {/* <BottomTab.Screen
        name="知识库"
        component={ LinksScreen }
        options={ {
          title: '知识库',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={ focused } name="md-book" />,
        } }
      />
      <BottomTab.Screen
        name="饮食"
        component={ LinksScreen }
        options={ {
          title: '饮食',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={ focused } name="ios-settings" />,
        } }
      />
      <BottomTab.Screen
        name="我的"
        component={ UserScreen }
        options={ {
          title: '我的',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={ focused } name="ios-star" />,
        } }
      /> */}
      {/* <BottomTab.Screen
        name="成就"
        component={ LinksScreen }
        options={ {
          title: '成就',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={ focused } name="ios-arrow-round-up" />,
        } }
      /> */}
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
