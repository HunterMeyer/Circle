import React from 'react'
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native'
import { Icon, COLOR } from 'react-native-material-ui'

const TabBar = React.createClass({
  tabIcons: [],
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    backgroundColor: React.PropTypes.string,
    activeTextColor: React.PropTypes.string,
    inactiveTextColor: React.PropTypes.string,
    tabStyle: View.propTypes.style,
    renderTab: React.PropTypes.func,
    underlineStyle: View.propTypes.style,
  },

  getDefaultProps() {
    return {
      activeTextColor: COLOR.white,
      inactiveTextColor: COLOR.grey400,
      backgroundColor: COLOR.indigo500,
    };
  },

  renderTabOption(name, page) {
  },

  renderTab(name, page, isTabActive, onPressHandler) {
    const { activeTextColor, inactiveTextColor, } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    return (
      <TouchableOpacity key={name} onPress={() => onPressHandler(page)} style={styles.tab} activeOpacity={ 1 } >
        <Icon
          name={name}
          color={textColor}
          ref={(icon) => { this.tabIcons[page] = icon; }}
      />
      </TouchableOpacity>
    )
  },

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 3,
      backgroundColor: COLOR.indigo200,
      bottom: 0,
    };

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ], outputRange: [0,  containerWidth / numberOfTabs, ],
    });

    return (
      <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        <Animated.View style={[tabUnderlineStyle, { left, }, this.props.underlineStyle, ]} />
      </View>
    );
  },
});

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: COLOR.indigo500,
    elevation: 4
  },
});

module.exports = TabBar;
