import React, { Component } from 'react'
import { AppRegistry, NativeModules } from 'react-native'
import AppNavigator from './app/navigation/AppNavigator'
import { COLOR, ThemeProvider } from './node_modules/react-native-material-ui'

export default class Circle extends Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <AppNavigator />
      </ThemeProvider>
    )
  }
}

const uiTheme = {
  palette: {
    primaryColor: COLOR.indigo500,
    accentColor: COLOR.greenA700
  },
  toolbar: {
    container: {
      height: 50
    }
  }
}

AppRegistry.registerComponent('Circle', () => Circle);
