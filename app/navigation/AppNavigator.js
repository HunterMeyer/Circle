'use strict'

import React, { Component } from 'react'
import { Navigator, StyleSheet, StatusBar } from 'react-native'
import { COLOR } from 'react-native-material-ui';
import Container from '../shared/Container'
import routes from '../routes'

export default class AppNavigator extends Component {
  _renderScene(route, navigator) {
    return (
      <Container>
        <StatusBar backgroundColor={ COLOR.indigo800 } />
        <route.screen navigator={ navigator } { ...route.passProps } />
      </Container>
    )
  }

  render() {
    return (
      <Navigator
        style={ styles.container }
        initialRoute={ routes.home }
        renderScene={ this._renderScene }
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
