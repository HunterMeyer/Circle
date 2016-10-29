'use strict'

import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'
import { COLOR } from 'react-native-material-ui'
import Container from '../shared/Container'

export default class NotificationsTab extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <Text>Notifications Go Here</Text>
        </ScrollView>
      </Container>
    )
  }
}

module.exports = NotificationsTab
