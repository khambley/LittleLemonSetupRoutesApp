import * as React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('./img/logo.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />

        <Text style={styles.headerText}>Little Lemon</Text>
      </View>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Back To Login</Text>
      </Pressable>
    </ScrollView>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333"
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
    color: 'white'
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
});


