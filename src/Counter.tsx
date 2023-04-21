import React, { FC } from "react";
import { Button, Text, View } from "react-native";

const Counter: FC = () => (
  <View>
    <Text>Counter: 0</Text>
    <Button
      title="Increment"
      onPress={() => console.log("Hello world!")}
      testID="incrementButton" />
    />
  </View>
);
export default Counter;