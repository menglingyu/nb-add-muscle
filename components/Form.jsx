import React, { useState, useRef } from "react";
import { View, StyleSheet } from "react-native";
import {
  TextInput,
  Button,
  Portal,
  Modal,
  Text,
  RadioButton,
  TouchableRipple,
} from "react-native-paper";
import { Formik } from "formik";
import { useQuery } from "@apollo/react-hooks";

export default function UserInfoForm({
  handleSubmit,
  visible = false,
  initialValues,
  onDismiss,
}) {
  // const { data } = useQuery(GET_USER_INFO);
  // const userInfo = data ? data.userInfo : {};
  const userInfo = {};

  return (
    <Formik
      initialValues={{ age: "", height: 0, weight: 0 }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            label="年龄"
            onChangeText={handleChange("age")}
            onBlur={handleBlur("age")}
            value={values.age}
          />
          <TextInput
            label="身高"
            onChangeText={handleChange("height")}
            onBlur={handleBlur("height")}
            value={values.height}
          />
          <TextInput
            label="体重"
            onChangeText={handleChange("weight")}
            onBlur={handleBlur("weight")}
            value={values.weight}
          />
          <TextInput
            label="健身频率"
            onChangeText={handleChange("frequency")}
            onBlur={handleBlur("frequency")}
            value={values.frequency}
          />
          <TextInput
            label="体脂率(可选)"
            onChangeText={handleChange("fat")}
            onBlur={handleBlur("fat")}
            value={values.fat}
          />
          <View style={{ flexDirection: "row" }}>
            <Button icon="camera" mode="outlined">
              男
            </Button>
            <Button mode="outlined">女</Button>
          </View>
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
    // <Formik onSubmit={handleSubmit}>
    //   {({ handleChange, handleBlur, handleSubmit, values }) => {
    //     return (
    //       <View>
    //         <TextInput label="年龄" />
    //         <TextInput label="身高" />
    //         <TextInput label="重量" />
    //         <TextInput label="健身频率" />
    //         <TextInput label="体脂率(可选)" />
    //         <View style={{ flexDirection: "row" }}>
    //           <Button icon="camera" mode="outlined">
    //             男
    //           </Button>
    //           <Button mode="outlined">女</Button>
    //         </View>
    //         <Button
    //           mode="contained"
    //           style={{ marginTop: 20 }}
    //           onPress={handleSubmit}
    //         >
    //           确定
    //         </Button>
    //       </View>
    //     );
    //   }}
    // </Formik>
    // <Portal>
    //   <Modal
    //     visible={visible}
    //     onDismiss={onDismiss}
    //     contentContainerStyle={styles.container}
    //   >
    //     <View>

    //     </View>
    //   </Modal>
    // </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 360,
    padding: 14,
    alignSelf: "center",
    // backgroundColor: '#fff'
  },
});
