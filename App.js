import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { Provider as PaperProvider } from 'react-native-paper';



import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import { BASE_URL } from './constants/config';
import { THEME } from './constants/theme';

const Stack = createStackNavigator();
const client = new ApolloClient({
  uri: BASE_URL,
  link: new HttpLink(),
  cache: new InMemoryCache()
});


export default function App(props) {
  // const isLoadingComplete = useCachedResources();

  const [isModel, setIsModel] = React.useState(false)
  // if (!isLoadingComplete) {
  //   return null;
  // } else {
  // client.writeData({

  // })
  return (
    <ApolloProvider client={ client }>
      <PaperProvider theme={ THEME }>
        <View style={ styles.container }>
          { Platform.OS === 'ios' && <StatusBar barStyle="dark-content" /> }
          <NavigationContainer linking={ LinkingConfiguration }>
            <Stack.Navigator>
              <Stack.Screen name="Root" component={ BottomTabNavigator } />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
        {/* <Portal>
          <Modal visible={ visible } onDismiss={ () => setModal(false) }>
            <Text>Example Modal</Text>
          </Modal>
        </Portal> */}
      </PaperProvider>
    </ApolloProvider>
  );
}
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
