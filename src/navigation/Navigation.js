import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers/index';
import Appnavigator from './Appnavigator';
import {ThemeProvider} from '../../ThemeContext';

const store = configureStore({reducer: rootReducer});

const Navigation = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <Appnavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default Navigation;
