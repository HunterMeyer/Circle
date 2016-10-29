'use strict'

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ListView,
  ScrollView,
  TouchableHighlight
} from 'react-native'
import { ActionButton, COLOR, Icon } from 'react-native-material-ui'
import Container from '../shared/Container'

export default class FeedTab extends Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1.id !== r2.id })
    this.state = {
      dataSource: dataSource.cloneWithRows([
        { id: 1, title: 'Come Get Wasted', distance: '2mi', user: 'Brad', attendees: '3' },
        { id: 2, title: 'Watch the Game', distance: '3mi', user: 'Sharon', attendees: '5' },
        { id: 3, title: 'Take a Hike', distance: '6mi', user: 'Denise', attendees: '6' },
        { id: 4, title: 'Game of Thrones', distance: '7mi', user: 'Smith Family', attendees: '3' },
        { id: 5, title: 'Super Smash Bros', distance: '8mi', user: 'Bunch a Nerds', attendees: '8' },
        { id: 6, title: 'Spades and Hearts', distance: '10mi', user: 'Jamie', attendees: '3' }
      ])
    }
  }

  renderRow(event, sectionID, rowID) {
    return (
      <TouchableHighlight onPress={ () => this.rowPressed(event.id) } underlayColor='#dddddd'>
        <View>
          <View style={ styles.rowContainer }>
            <View style={ styles.textContainer }>
              <Text style={ styles.name }>{ event.title }</Text>
              <Text style={ styles.distance } numberOfLines={ 1 }>{ event.distance }</Text>
              <Text style={ styles.info } numberOfLines={ 1 }>{ event.user } - { event.attendees }</Text>
            </View>
          </View>
          <View style={ styles.separator } />
        </View>
      </TouchableHighlight>
    )
  }

  rowPressed = (eventId) => {

  }

  render() {
    return (
      <Container>
        <ScrollView>
          <ListView
            dataSource={ this.state.dataSource }
            renderRow={ this.renderRow.bind(this) }
          />
        </ScrollView>
        <ActionButton />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1d4288'
  },
  distance: {
    fontSize: 12,
    color: '#656565'
  },
  info: {
    fontSize: 14,
    color: '#656565',
    marginTop: 3
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
})

module.exports = FeedTab
