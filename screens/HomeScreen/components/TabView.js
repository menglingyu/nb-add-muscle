import * as React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { PROMETHEUS_COURSES } from '../constants';
import CText from '../../../components/CText';

const initialLayout = { width: Dimensions.get('window').width };

export default function CTabView({ setLesson }) {

  const RouteView = ({ type }) => {
    return (
      <ScrollView style={ styles.container } contentContainerStyle={ styles.contentContainer }>
        {
          PROMETHEUS_COURSES[type].map((item, index) => (
            <TouchableOpacity
              key={ index }
              style={ styles.lessonContainer }
              onPress={ () => { setLesson(item) } }
            >
              <CText>
                { item.title }
              </CText>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    )
  };


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: '阶段1' },
    { key: 'second', title: '阶段2' },
    { key: 'third', title: '阶段3' },
    { key: 'fourth', title: '阶段4' },
  ]);

  const renderScene = SceneMap({
    first: () => <RouteView type='first' />,
    second: () => <RouteView type='second' />,
    third: () => <RouteView type='third' />,
    fourth: () => <RouteView type='fourth' />
  });

  return (
    <TabView
      navigationState={ { index, routes } }
      renderScene={ renderScene }
      onIndexChange={ setIndex }
      initialLayout={ initialLayout }
    />
  );
}

const styles = StyleSheet.create({
  lessonContainer: {
    borderBottomWidth: 1,
    borderColor: '#eee',
    borderRadius: 4,
    padding: 12
  },
  scene: {
    flex: 1,
  },
});