'use strict'

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native'
import { Toolbar, COLOR, Icon, Button } from 'react-native-material-ui'
import Container from '../shared/Container'
import ParallaxScrollView from 'react-native-parallax-scroll-view'
import CategoryIcon from '../shared/CategoryIcon'

export default class ViewEvent extends Component {
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
      <View style={{height: 250, alignItems: 'center' }}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarBackground}>
            <Image style={styles.avatar} source={event.avatar} />
          </View>
        </View>
        <View style={styles.userNameContainer}>
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

  renderEventQuickDetails(event) {
    return(
      <Container>
        <View style={[styles.cardContainer, {flex: 1, flexDirection: 'row'}]}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Icon size={ 14 } color={ COLOR.indigo200 } name='place' /><Text style={{fontSize: 12}}>{ event.distance }</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Icon size={ 14 } color={ COLOR.indigo200 } name='people' /><Text style={{fontSize: 12}}>{ event.attendees }</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <CategoryIcon size={ 14 } color={ COLOR.indigo200 } name={event.category} /><Text style={{fontSize: 12}}>{ event.category }</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Icon size={ 14 } color={ COLOR.indigo200 } name='watch-later' /><Text style={{fontSize: 12}}>{ event.posted }</Text>
          </View>
        </View>
      </Container>
    )
  }

  renderEventDescription(event) {
    return (
      <Container>
        <View style={styles.cardContainer}>
          <Text style={{paddingBottom: 5}}>{event.description}</Text>
          { this.renderEventHightlights(event) }
        </View>
      </Container>
    )
  }

  renderEventHightlights(event) {
    return (
      <View style={styles.highlightContainer}>
        {event.highlights.map((title, index) => {
          return (
            <Text key={index} style={styles.highlightTag}>{title}</Text>
          )
        })}
      </View>
    )
  }

  renderEventActions(event) {
    return (
      <Container>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, padding: 5}}>
            <Button raised primary text='Invite Me' icon='person-add'/>
          </View>
          <View style={{flex: 1, padding: 5}}>
            <Button raised text='Message Host' icon='chat' style={{ text: {color: COLOR.indigo300} }} />
          </View>
        </View>
      </Container>
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
          { this.renderEventQuickDetails(event) }
          <View style={{padding: 10}}>
            { this.renderEventDescription(event) }
          </View>
          <View style={{padding: 10}}>
            { this.renderEventActions(event) }
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Button text='Report Event' icon='warning' style={{ text: { color: COLOR.grey300, }}} />
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
    flex: 5,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  avatarBackground: {
    elevation: 2,
    borderRadius: 100,
    backgroundColor: '#fff',
    padding: 5
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'cover'
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userName: {
     fontSize: 22
  },
  starContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  highlightText: {
    color: '#fff',
    textShadowColor: COLOR.grey800,
    textShadowRadius: 6,
    textShadowOffset: { width: 0, height: 1 }
  },
  cardContainer: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 2,
    elevation: 2
  },
  highlightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 8,
    borderTopWidth: 1,
    borderColor: COLOR.grey200
  },
  highlightTag: {
    color: COLOR.indigo300,
    backgroundColor: COLOR.grey200,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    marginRight: 5
  }
})

module.exports = ViewEvent
