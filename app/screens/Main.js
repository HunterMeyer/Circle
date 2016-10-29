'use strict'

import React, { Component } from 'react'
import { Toolbar } from 'react-native-material-ui'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Container from '../shared/Container'
import TabBar from '../shared/TabBar'
import FeedTab from './FeedTab'
import TagsTab from './TagsTab'
import NotificationsTab from './NotificationsTab'

export default class Stream extends Component {
  render() {
    return (
      <Container>
        <Toolbar
          centerElement='Circle'
          searchable={{
            autoFocus: true,
            placeholder: 'Location...'
          }}
          style={{ container: { elevation: 0 } }}
        />
        <ScrollableTabView renderTabBar={() => <TabBar />} >
          <FeedTab tabLabel='place' />
          <TagsTab tabLabel='style' />
          <NotificationsTab tabLabel='notifications' />
        </ScrollableTabView>
      </Container>
    )
  }
}
