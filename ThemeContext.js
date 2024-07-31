import React, {createContext, useState, useContext, useEffect} from 'react';
import {Appearance, StatusBar} from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(getInitialTheme());

  function getInitialTheme() {
    const colorScheme = Appearance.getColorScheme();
    return {
      backgroundColor: colorScheme === 'dark' ? '#000000' : '#d3d3d3', // Dark mode: black, Light mode: light gray
      textColor: colorScheme === 'dark' ? '#ffffff' : '#000000', // Dark mode: white text, Light mode: black text
      appIcon: 'default_icon',
      colorScheme,
    };
  }

  const toggleTheme = () => {
    setTheme(prevTheme => ({
      backgroundColor:
        prevTheme.backgroundColor === '#d3d3d3' ? '#000000' : '#d3d3d3',
      textColor:
        prevTheme.backgroundColor === '#d3d3d3' ? '#ffffff' : '#000000',
      appIcon:
        prevTheme.appIcon === 'default_icon' ? 'dark_icon' : 'default_icon',
    }));
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setTheme({
        backgroundColor: colorScheme === 'dark' ? '#000000' : '#d3d3d3',
        textColor: colorScheme === 'dark' ? '#ffffff' : '#000000',
        appIcon: 'default_icon',
        colorScheme,
      });
    });

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    StatusBar.setBarStyle(
      theme.colorScheme === 'dark' ? 'light-content' : 'dark-content',
    );
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true);
  }, [theme.colorScheme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
