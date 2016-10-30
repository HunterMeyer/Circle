'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native'
import { Toolbar, COLOR, Icon } from 'react-native-material-ui'
import Container from '../shared/Container'

export default class Event extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const event = this.props.event
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={COLOR.grey900} />
        <Toolbar
          centerElement={event.title}
          rightElement='close'
          onRightElementPress={() => this.props.navigator.pop(0) }
          style={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.54)', zIndex: 1000 }}}
        />
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={event.image} />
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  imageContainer: {
    marginTop: -80
  },
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  heading: {
    backgroundColor: '#F8F8F8',
  },
  separator: {
    height: 1,
    marginTop: 5,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 400,
    height: 300
  },
  contact: {
    fontSize: 15,
    margin: 5,
    color: '#656565'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#1d4288'
  },
  description: {
    fontSize: 15,
    margin: 10,
    color: '#656565'
  },
  website: {
    color: '#f25d25',
    fontSize: 18,
    margin: 10
  }
})


module.exports = Event
