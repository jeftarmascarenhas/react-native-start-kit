import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Home extends Component {
  state = { title: 'Home' }

  render() {
    const { title } = this.state
    return (
      <View>
        <Text>{title}</Text>
      </View>
    )
  }
}

export default Home
