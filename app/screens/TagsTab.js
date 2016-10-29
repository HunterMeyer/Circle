'use strict'

import React, { Component } from 'react'
import {
  Text,
  StyleSheet,
  ScrollView
} from 'react-native'
import { COLOR } from 'react-native-material-ui'
import Container from '../shared/Container'

export default class TagsTab extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <Text>Tags Go Here</Text>
        </ScrollView>
      </Container>
    )
  }
}

module.exports = TagsTab
