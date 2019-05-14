import React, { Component } from 'react'
import { View, Text } from 'react-native'

class SignIn extends Component {
  static navigationOptions = {
    header: null,
  }

  state = { title: 'SignIn' }

  render() {
    const { title } = this.state
    return (
      <View>
        <Text>{title}</Text>
      </View>
    )
  }
}

export default SignIn
