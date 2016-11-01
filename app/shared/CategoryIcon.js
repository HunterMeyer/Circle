import { default as VectorIcon } from 'react-native-vector-icons/MaterialIcons'
import React, { Component, PropTypes } from 'react'

const propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  size: PropTypes.number,
  color: PropTypes.string,
}
const defaultProps = { }
const contextTypes = {
  uiTheme: PropTypes.object.isRequired,
}

class CategoryIcon extends Component {
  nameMap() {
    return(
      {
        partying: 'local-bar',
        sports: 'golf-course', // weekend
        outdoors: 'landscape', // rowing
        tv: 'tv', // local-movies, theaters, ondemand-video
        games: 'videogame-asset' // games (maybe let users pic icons?), extension
      }
    )
  }


  render() {
    const { name, style, size, color } = this.props
    const { palette, spacing } = this.context.uiTheme

    const iconColor = color || palette.secondaryTextColor
    const iconSize = size || spacing.iconSize
    icon_name = name

    return (
      <VectorIcon
        name={this.nameMap()[icon_name.toLowerCase()]}
        size={iconSize}
        color={iconColor}
        style={style}
      />
    )
  }
}

CategoryIcon.propTypes = propTypes
CategoryIcon.defaultProps = defaultProps
CategoryIcon.contextTypes = contextTypes

export default CategoryIcon
