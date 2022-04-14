import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React from "react";
import contacts from "./contact";

const Row = (props) => (
  <View style={styles.info}>
    <Text>{`${props.name}\t\t\t\t\t`}</Text>
    <Text>{props.phone}</Text>
  </View>
);

export default class App extends React.Component {
  state = {
    showContacts: false,
  };

  toggleContact = () => {
    this.setState((prevState) => ({ showContacts: !prevState.showContacts }));
  };

  render() {
    if (!this.state.showContacts) {
      return (
        <View style={styles.container}>
          <Button title="toogle contacts" onPress={this.toggleContact} />
          <ScrollView>
            <View>
              {contacts.map((contact) => (
                <Row {...contact} />
              ))}
            </View>
          </ScrollView>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Button title="toogle contacts" onPress={this.toggleContact} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flexDirection: "row",
  },
});
