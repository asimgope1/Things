import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  BackHandler,
  Alert,
} from 'react-native';
import {useTheme} from '../../../ThemeContext';
import {RFValue} from 'react-native-responsive-fontsize';
import {loginStyles} from './LoginStyles';

const Login = () => {
  const {theme} = useTheme();

  useEffect(() => {
    const handleBackPress = () => {
      if (Platform.OS === 'android') {
        // Android: exit the app
        BackHandler.exitApp();
        return true; // Prevent the default back action
      } else if (Platform.OS === 'ios') {
        // iOS: show an alert
        Alert.alert(
          'Exit App',
          'Do you really want to exit?',
          [
            {text: 'Cancel', onPress: () => null, style: 'cancel'},
            {text: 'OK', onPress: () => BackHandler.exitApp()},
          ],
          {cancelable: false},
        );
        return true; // Prevent the default back action
      }
      return false; // Default behavior
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, []);

  return (
    <SafeAreaView
      style={[loginStyles.container, {backgroundColor: theme.backgroundColor}]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={loginStyles.inner}>
        <ScrollView contentContainerStyle={loginStyles.scrollView}>
          <View style={loginStyles.content}>
            <Text style={[loginStyles.text, {color: theme.textColor}]}>
              Login
            </Text>
            {/* Add your login form elements here */}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
