'use strict'

import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Toolbar, COLOR } from 'react-native-material-ui'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Container from '../shared/Container'
import TabBar from '../shared/TabBar'
import FeedTab from './FeedTab'
import TagsTab from './TagsTab'
import NotificationsTab from './NotificationsTab'

export default class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor={ COLOR.indigo800 } />
        <Toolbar
          centerElement={ this.props.title }
          searchable={{
            autoFocus: true,
            placeholder: 'Location...'
          }}
          style={{ container: { elevation: 0 } }}
        />
        <ScrollableTabView renderTabBar={() => <TabBar />} >
          <FeedTab tabLabel='place' { ...this.props } />
          <TagsTab tabLabel='style' { ...this.props } />
          <NotificationsTab tabLabel='notifications' { ...this.props } />
        </ScrollableTabView>
      </Container>
    )
  }
}

module.exports = Main