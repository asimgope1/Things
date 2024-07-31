import React, {useEffect} from 'react';
import {View, SafeAreaView, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {HEIGHT, WIDTH} from '../../constants/config';
import {splashStyles} from './SplashStyles';
import {useTheme} from '../../../ThemeContext';
import {StatusBar} from 'react-native';

const Splash = ({navigation}) => {
  const {theme} = useTheme();

  useEffect(() => {
    // Navigate to Login after 1 second
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  useEffect(() => {
    // Update the status bar style based on theme
    StatusBar.setBarStyle(
      theme.colorScheme === 'dark' ? 'light-content' : 'dark-content',
    );
  }, [theme]);

  return (
    <SafeAreaView style={styles.maincontainer}>
      <LinearGradient
        end={{x: 0, y: 0}}
        start={{x: 0, y: 1}}
        colors={[theme.backgroundColor, theme.backgroundColor]}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            ...splashStyles.logoContainer,
            width: WIDTH * 0.9,
            height: HEIGHT * 0.2,
          }}>
          <Text
            style={{
              color: theme.textColor,
              fontFamily: theme.boldFont,
              fontSize: 20,
              textAlign: 'center',
              marginBottom: HEIGHT * 0.05,
            }}>
            Splash
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
});

export default Splash;
