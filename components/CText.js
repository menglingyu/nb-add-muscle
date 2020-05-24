// import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Text } from 'react-native';

import Colors from '../constants/Colors';

export default function CText({ children, ...props }) {
  return (
    <Text
      {...props}
    >
      { children }
    </Text>
  );
}
