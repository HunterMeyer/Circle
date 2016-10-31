'use strict'

import React, { Component } from 'react'
import { Navigator, StyleSheet, BackAndroid } from 'react-native'
import { COLOR } from 'react-native-material-ui';
import Container from '../shared/Container'
import Main from '../screens/Main'

var navigator

BackAndroid.addEventListener('hardwareBackButtonPress', () => {
  if (navigator && navigator.getCurrentRoutes().length > 1) {
    navigator.pop()
    return true
  }
  return false
})

export default class AppNavigator extends Component {
  _renderScene(route, navigator) {
    return (
      <Container>
        <route.screen navigator={ navigator } { ...route.passProps } />
      </Container>
    )
  }

  render() {
    return (
      <Navigator
        ref={(nav) => { navigator = nav }}
        style={ styles.container }
        initialRoute={{ screen: Main, passProps: { title: 'Circle' }}}
        renderScene={ this._renderScene }
        configureScene={(route, stack) => Navigator.SceneConfigs.FloatFromBottom }
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

module.exports = AppNavigator
