'use strict'

import React, { Component } from 'react'
import { Navigator, StyleSheet } from 'react-native'
import { COLOR } from 'react-native-material-ui';
import Container from '../shared/Container'
import Main from '../screens/Main'

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
