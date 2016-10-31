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
import Event from './Event'

export default class FeedTab extends Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id })
    this.state = {
      promptLocation: true,
      dataSource: dataSource.cloneWithRows([
        { id: 1, title: 'Come Get Wasted', distance: '2mi', user: 'Brad', attendees: '3', image: require('../../img/drinking.jpg') },
        { id: 2, title: 'Watch the Game', distance: '3mi', user: 'Sharon', attendees: '5', image: require('../../img/the-game.jpg') },
        { id: 3, title: 'Take a Hike', distance: '6mi', user: 'Denise', attendees: '6', image: require('../../img/hike.jpg') },
        { id: 4, title: 'Game of Thrones', distance: '7mi', user: 'Smith Family', attendees: '3', image: require('../../img/got.jpg') },
        { id: 5, title: 'Super Smash Bros', distance: '8mi', user: 'Bunch a Nerds', attendees: '8', image: require('../../img/smash.jpg') },
        { id: 6, title: 'Spades and Hearts', distance: '10mi', user: 'Jamie', attendees: '3', image: require('../../img/cards.jpg') },
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

  renderRow(event, sectionID, rowId) {
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
              <Icon size={ 18 } color={ COLOR.indigo200 } name='account-circle' /><Text style={styles.cardDetailText}>{ event.user }</Text>
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
    this.props.navigator.push({
      screen: Event,
      passProps: { event, navigator: this.props.navigator }
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
    flex: 1,
    width: 340,
    height: 180,
    paddingTop: 120,
    alignSelf: 'center',
    resizeMode: 'cover'
  },
  cardTitleBackground: {
    flex: 1,
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
  cardDetailText: {
    marginLeft: 3,
    fontSize: 12
  },
  cardActions: {
    borderTopWidth: 1,
    borderColor: COLOR.grey200 
  },
  cardAction: {
    color: COLOR.yellow700
  }
})

module.exports = FeedTab
