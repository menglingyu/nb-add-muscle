import * as WebBrowser from 'expo-web-browser';
import React, { useRef, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import VideoPlayer from '../../components/Video'
import { Button } from 'react-native-paper';
// import { Ionicons } from '@expo/vector-icons';
import { WIDTH } from '../../constants'
import { PROMETHEUS_COURSES } from './constants';
import CText from '../../components/CText';
import CTabView from './components/TabView';


export default function HomeScreen() {
  const [lesson, setLesson] = useState(PROMETHEUS_COURSES.first[0])
  const [videoStatus, setVideoStatus] = useState({
    progressUpdateIntervalMillis: 500,
    positionMillis: 0,
    shouldPlay: false,
    rate: 1.0,
    shouldCorrectPitch: false,
    volume: 1.0,
    isMuted: true,
    isLooping: false,
  })

  const childRef = useRef(null);

  let timer = null


  const handlePlay = () => {
    childRef.current.setStatusAsync({ shouldPlay: true })
    setVideoStatus({ ...videoStatus, shouldPlay: true })
  }

  const handleStop = () => {
    childRef.current.setStatusAsync({ shouldPlay: false })
    setVideoStatus({ ...videoStatus, shouldPlay: false })
  }

  const handlePosition = (value) => {
    childRef.current.setStatusAsync({ positionMillis: value })
    setVideoStatus({ ...videoStatus, positionMillis: value })
  }

  return (
    <View style={ styles.container }>
      <View>
        <VideoPlayer
          cRef={ childRef }
          videoProps={ {
            shouldPlay: true,
            source: lesson.source,
            resizeMode: 'cover'
          } }
          height={ WIDTH * 9 / 16 }
          inFullscreen={ false }
          fadeOutDuration={ 2500 }
        />

      </View>
      <View style={ { padding: 6 } }>
        <CText>跳转到: </CText>
      </View>
      <View style={ { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', paddingHorizontal: 10 } }>
        {
          lesson.keyTimes && lesson.keyTimes.map((keyTime, index) => (
            <Button
              compact
              style={ { marginRight: 4, marginVertical: 4 } }
              mode='outlined'
              onPress={ () => handlePosition(keyTime.time * 1000) }
            >
              { keyTime.label }
            </Button>
          ))
        }
      </View>

      {/* <Button icon="camera" mode="outlined" onPress={ () => console.log('Pressed') }>
        第一节开始
      </Button> */}

      <View>
        {/* 一分钟计时器 */ }
        {/* 训练结果评估 */ }
        {/* 训练容量 */ }
        {/* 跳转到上一组 */ }
        {/* 跳转到下一组 */ }
      </View>
      <CTabView
        setLesson={ setLesson }
      />

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={ handleLearnMorePress } style={ styles.helpLinkText }>
        Learn more
      </Text>
    );

    return (
      <Text style={ styles.developmentModeText }>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. { learnMoreButton }
      </Text>
    );
  } else {
    return (
      <Text style={ styles.developmentModeText }>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },

  videoControl: {
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 2,
  },
  playIcon: {
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
