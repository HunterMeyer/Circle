'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ListView,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import { ActionButton, COLOR, Icon, Button } from 'react-native-material-ui'
import Container from '../shared/Container'
import ViewEvent from './ViewEvent'

export default class FeedTab extends Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id })
    this.state = {
      promptLocation: true,
      dataSource: dataSource.cloneWithRows([
        { id: 1, title: 'Come Get Wasted', distance: '2mi', user: 'Brad', attendees: '3', image: require('../../img/drinking.jpg'), avatar: require('../../img/brad.jpg'), posted: '30 min ago', category: 'Partying', highlights: ['21+'], description: 'What is up Circle-tons? I am bored and feel like going to grab a drink at The White Horse Bar but do not want to be the guy by himself! Come join me, first round on me!' },
        { id: 2, title: 'Watch the Game', distance: '3mi', user: 'Sharon', attendees: '5', image: require('../../img/the-game.jpg'), avatar: require('../../img/sharon.jpg'), posted: '1 hr ago', category: 'Sports', highlights: ['21+'], description: 'Whether you are an Eagles fan or Falcons fan these birds are facing off on my big ass TV. I have a ton of beer and food. Come on over and enjoy Sunday Funday the way it was meant to be.' },
        { id: 3, title: 'Take a Hike', distance: '6mi', user: 'Denise', attendees: '6', image: require('../../img/hike.jpg'), avatar: require('../../img/denise.jpg'), posted: '1.5 hr ago', category: 'Outdoors', highlights: ['All-Ages', 'No-Fee Trail'], description: 'It is so beautiful outside. I am getting ready to hit Rounded Bend trails because it is free-pass day. I am no expert so all skill levels welcome. Get off the couch and join me!' },
        { id: 4, title: 'Game of Thrones', distance: '7mi', user: 'Smith Family', attendees: '3', image: require('../../img/got.jpg'), avatar: require('../../img/smith-family.jpeg'), posted: '3 hr ago', category: 'TV', highlights: ['BYOB', 'Pets Present'], description: 'Game of Thrones premiers tonight. We have some pets in case you are allergic. We have snacks, cola, and a nice tv and sound-system. Starts at 10pm.' },
        { id: 5, title: 'Super Smash Bros', distance: '8mi', user: 'Bunch a Nerds', attendees: '8', image: require('../../img/smash.jpg'), avatar: require('../../img/nerds.jpg'), posted: '3.5 hr ago', category: 'Games', highlights: ['BYOC', 'Drinks Provided'], description: 'All right you game-nuts. We got Super Smash Bros. Melee on GameCube. Lets have a tournament. Bring your own controller. We have drinks covered.' },
        { id: 6, title: 'Spades and Hearts', distance: '10mi', user: 'Jamie', attendees: '3', image: require('../../img/cards.jpg'), avatar: require('../../img/jamie.png'), posted: '4 hr ago', category: 'Games', highlights: ['All-Ages', 'Food/Drink Provided'], description: 'We are new to the neighborhood. Come introduce yourself by playing some card games. All-ages welcome - we have children present. We also have food and drinks.' },
      ])
    }
  }

  renderDisplay() {
    if (this.state.promptLocation) {
      return this.needLocationCard()
    } else {
      return this.resultsList()
    }
  }

  needLocationCard() {
    if (this.state.promptLocation) { return (
      <TouchableHighlight underlayColor='#eee' style={styles.container }>
        <View style={styles.cardContainer}>
          <Image source={require('../../img/need-location.png')} style={styles.cardImage} />
          <View style={styles.cardDetails}>
            <Text>Get the most out of Circle by finding out what's going on near you.</Text>
          </View>
          <View style={styles.cardActions}>
            <Button text='Enable Location' style={{ text: styles.cardAction }} onPress={ () => this.setState({promptLocation: false}) } />
          </View>
        </View>
      </TouchableHighlight>
    ) }
  }

  resultsList() {
    return (
      <ListView dataSource={ this.state.dataSource } renderRow={ this.renderRow.bind(this) } />
    )
  }

  renderRow(event) {
    return (
      <TouchableHighlight onPress={ () => this.rowPressed(event) } style={styles.container } underlayColor='#eee'>
        <View style={styles.cardContainer}>
          <Image source={event.image} style={styles.cardImage}>
            <View style={styles.cardTitleBackground}></View>
          </Image>
          <Text style={styles.cardTitleText} numberOfLines={ 1 }>{ event.title }</Text>
          <View style={styles.cardDetails}>
            <View style={styles.cardDetailItem}>
              <Icon size={ 18 } color={ COLOR.indigo200 } name='place' /><Text style={styles.cardDetailText}>{ event.distance }</Text>
            </View>
            <View style={styles.cardDetailItem}>
              <Image style={styles.cardDetailAvatar} source={event.avatar} /><Text style={styles.cardDetailText}>{ event.user }</Text>
            </View>
            <View style={styles.cardDetailItem}>
              <Icon size={ 18 } color={ COLOR.indigo200 } name='people' /><Text style={styles.cardDetailText}>{ event.attendees }</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  rowPressed(event) {
    navigator = this.props.navigator
    navigator.push({
      screen: ViewEvent,
      passProps: { event, navigator }
    })
  }

  render() {
    return (
      <Container>
        <ScrollView>
          {this.renderDisplay()}
        </ScrollView>
        <ActionButton />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  cardContainer: {
    margin: 2,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 2,
    elevation: 2
  },
  cardImage: {
    width: null,
    height: 180
  },
  cardTitleBackground: {
    marginTop: 120,
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.54)'
  },
  cardTitleText: {
    position: 'absolute',
    top: 132,
    left: 12,
    right: 5,
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  },
  cardDetails: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
  },
  cardDetailItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  cardDetailAvatar: {
    width: 18,
    height: 18,
    borderRadius: 18
  },
  cardDetailText: {
    marginLeft: 3,
    fontSize: 12
  },
  cardActions: {
    padding: 5,
    borderTopWidth: 1,
    borderColor: COLOR.grey200 
  },
  cardAction: {
    color: COLOR.yellow700
  }
})

module.exports = FeedTab
