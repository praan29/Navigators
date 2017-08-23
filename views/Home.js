import React from "react";
import { ScrollView, Text, Linking, View } from "react-native";
import { Card, Button } from "react-native-elements";

import Ionicons from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';
const images = [
  {
    key: 1,
    name: "Nathan Anderson",
    image: require("../images/1.jpg"),
    url: "https://www.google.co.in"
  },
  {
    key: 2,
    name: "Jamison McAndie",
    image: require("../images/2.jpg"),
    url: "https://www.google.co.in"
  },
  {
    key: 3,
    name: "Alberto Restifo",
    image: require("../images/3.jpg"),
    url: "https://www.google.co.in"
  },
  {
    key: 4,
    name: "John Towner",
    image: require("../images/4.jpg"),
    url: "https://www.google.co.in"
  }
];

export default () => (
  <View style={{ flex: 1 }}>
    
    {/* <Text style={{ color: "white", fontSize: 28 }}>Home Page</Text> */}
    <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
      {images.map(({ name, image, url, key }) => (
        <Card title={`CARD ${key}`} image={image} key={key}>
          <Text style={{ marginBottom: 10 }}>
            Photo by {name}.
            <FIcon 
                            name = 'home'
                            size = {19}
                             color= 'red'
                        />
          </Text>
          <Button
            backgroundColor="#03A9F4"
            title="VIEW NOW"
            onPress={() => Linking.openURL(url)}
          />
        </Card>
      ))}
    </ScrollView>
  </View>
);