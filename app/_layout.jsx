import { StatusBar } from "expo-status-bar";
import { 
    StyleSheet, 
    Text, View, 
    ImageBackground, 
    TouchableOpacity 
} from 'react-native';
import welcomePage from "../assets/images/welcome.jpg";

export default function App() {
    return (
        <View style={styles.container}>
          <ImageBackground source={welcomePage} style={styles.background}>
            {/* Top Content Container */}
            <View style={styles.topContent}>
              <Text style={styles.title}>Welcome to ChargeHotels</Text>
              <Text style={styles.subtitle}>Get access to the locations of hotels that include charging stations, and book them.</Text>
            </View>

            {/* Bottom Button Container */}
            <View style={styles.bottomContainer}>
              <TouchableOpacity style={styles.loginButton} onPress={() => console.log('Log In Pressed')}>
                <Text style={styles.loginButtonText}>Log in</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signupButton} onPress={() => console.log('Sign Up Pressed')}>
                <Text style={styles.signupButtonText}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      justifyContent: 'space-between', // Ensures the content is justified at both ends
      alignItems: 'center',
      width: '100%',
      height: '100%'
    },
    topContent: {
      marginTop: 140, // Ensures top content is pushed a bit down from the very top
      alignItems: 'center',
      width: '100%',
    },
    title: {
      color: 'black',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: 'transparent',
      padding: 10,
    },
    subtitle: {
      color: 'black',
      fontSize: 16,
      textAlign: 'center',
      backgroundColor: 'transparent',
      padding: 10,
      marginBottom: 20,
    },
    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      paddingHorizontal: 30,
      marginBottom: 70,
    },
    loginButton: {
      backgroundColor: 'white',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: 'grey',
    },
    signupButton: {
      backgroundColor: 'black',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 30,
    },
    loginButtonText: {
      color: 'black',
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    signupButtonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    }
});
