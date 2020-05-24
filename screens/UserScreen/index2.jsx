import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";

import { Card, List } from "react-native-paper";

import CText from "../../components/CText";
import { useQuery, useApolloClient, useMutation } from "@apollo/react-hooks";
import ModelUserInfoForm from "../../components/Form";
// import { Picker } from "@ant-design/react-native";
import { CUSTOM_MAP, GENDER_MAP } from "../../constants/index";
import { GET_USER_INFO, MUTATION_USER_INFO } from "../../services/user";
import { userA_mock } from "../../mock/userInfo";

export default function UserPage() {
  // const { data } = useQuery(GET_USER_INFO);

  // const [updateUserInfo] = useMutation(MUTATION_USER_INFO);
  // if (!data) return null;

  // const { userInfo }: { userInfo } = data;
  const userInfo = userA_mock;
  const [visible, setVisible] = useState(false);

  const listDAta = [];

  listDAta.push({
    label: "身高",
    value: userInfo.height,
    text: `${userInfo.height} cm`,
  });
  listDAta.push({
    label: "体重",
    value: userInfo.weight,
    text: `${userInfo.weight} kg`,
  });
  listDAta.push({
    label: "年龄",
    value: userInfo.age,
    text: userInfo.age,
  });

  const handleUpdateUserInfo = (data) => {
    updateUserInfo({ variables: { data } });
  };

  return (
    <View>
      <ModelUserInfoForm
        visible={visible}
        initialValues={userInfo}
        onDismiss={() => setVisible(false)}
        handleSubmit={handleUpdateUserInfo}
      />
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <List.Section>
          <List.Accordion title="个人信息">
            {listDAta.map((item, index) => (
              <List.Item
                key={index}
                onPress={() => {
                  item.callback ? item.callback() : setVisible(!visible);
                }}
                title={item.label}
                style={{ paddingRight: 22 }}
                right={(props) => <CText {...props}>{item.text}</CText>}
              />
            ))}
            {/* <Picker
              data={Object.keys(CUSTOM_MAP).map((key) => ({
                label: CUSTOM_MAP[key].label,
                value: key,
              }))}
              cols={1}
              onOk={(v) => handleUpdateUserInfo({ custom: v[0] })}
            >
              <List.Item
                title="运动习惯"
                style={{ paddingRight: 22 }}
                right={(props) => (
                  <CText {...props}>{CUSTOM_MAP[userInfo.custom].label}</CText>
                )}
              />
            </Picker>
            <Picker
              data={Object.keys(GENDER_MAP).map((key) => ({
                label: GENDER_MAP[key],
                value: key,
              }))}
              cols={1}
              onOk={(v) => handleUpdateUserInfo({ gender: v[0] })}
            >
              <List.Item
                title="性别"
                style={{ paddingRight: 22 }}
                right={(props) => (
                  <CText {...props}>{GENDER_MAP[userInfo.gender]}</CText>
                )}
              />
            </Picker> */}
          </List.Accordion>
        </List.Section>
        {/* <List.Section>
          <List.Accordion title="代谢数据">
            <List.Item
              title="基础代谢率"
              style={{ paddingRight: 22 }}
              right={props => (
                <CText {...props}>{GENDER_MAP[userInfo.gender]}</CText>
              )}
            />
          </List.Accordion>
        </List.Section> */}
      </Card>
    </View>
  );
}
