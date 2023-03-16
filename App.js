import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import  {Amplify,  Auth } from 'aws-amplify';
import awsConfig from './src/aws-exports.js';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(awsConfig)

const App = () => {

  async function salir() {
    try {
      await Auth.signOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Text tyle={styles.text} >Welcome!</Text>
      <TouchableOpacity onPress={salir} >
        <Text style={styles.buttonText} >SingOut</Text>
      </TouchableOpacity>
    </View>
  );
}

export default withAuthenticator(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'red'
  }
});
