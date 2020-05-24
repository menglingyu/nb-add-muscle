import React, { useState, useEffect } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import UserInfoForm from "../../components/Form";

export default function UserScreen() {
  return (
    <View>
      <UserInfoForm
        handleSubmit={(value) => {
          console.log("value: ", value);
        }}
      />
    </View>
  );
}
