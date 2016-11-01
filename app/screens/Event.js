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
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class Event extends Component {
  constructor(props) {
    super(props)
  }

  renderToolbar(event) {
    return (
      <Toolbar
        centerElement={event.title}
        rightElement='close'
        onRightElementPress={() => this.props.navigator.pop() }
        style={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.54)' }}}
      />
    )
  }

  renderUserDetails(event) {
    return (
      <View style={{height: 230, alignItems: 'center'}}>
        <View style={styles.avatarContainer}>
          <Image style={styles.avatar} source={event.avatar} />
        </View>
        <View>
          <Text numberOfLines={1} style={[styles.userName, styles.highlightText]}>{event.user}</Text>
        </View> 
        <View style={styles.starContainer}>
          <Icon style={[styles.highlightText]} size={18} name='star' />
          <Icon style={[styles.highlightText]} size={18} name='star' />
          <Icon style={[styles.highlightText]} size={18} name='star' />
          <Icon style={[styles.highlightText]} size={18} name='star' />
          <Icon style={[styles.highlightText]} size={18} name='star-border' />
        </View>
      </View>
    )
  }

  renderEventBackground(event) {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={event.image} />
      </View>
    )
  }

  render() {
    const event = this.props.event
    return (
      <Container>
        <StatusBar backgroundColor={COLOR.grey900} />
        <ParallaxScrollView
          backgroundColor={COLOR.grey900}
          contentBackgroundColor='#eee'
          parallaxHeaderHeight={250}
          stickyHeaderHeight={50}
          renderFixedHeader={() => this.renderToolbar(event) }
          renderForeground={() => this.renderUserDetails(event) }
          renderBackground={() => this.renderEventBackground(event) }
          >
          <View style={{ height: 500, padding: 10 }}>
            <Text>Sup bro, this is where all the event details will go :)</Text>
          </View>
        </ParallaxScrollView>
      </Container>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  image: {
    width: null,
    height: 250
  },
  avatarContainer: {
    elevation: 2,
    borderRadius: 100,
    backgroundColor: '#fff',
    padding: 5,
    marginTop: 70
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'cover'
  },
  userName: {
     fontSize: 22
  },
  starContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  highlightText: {
    color: '#fff',
    textShadowColor: COLOR.grey800,
    textShadowRadius: 6,
    textShadowOffset: { width: 0, height: 1 }
  }
})

module.exports = Event
