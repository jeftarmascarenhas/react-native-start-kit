import React, { Component } from 'react'
import { View, Text } from 'react-native'

class SignUp extends Component {
  state = { title: 'SignUp' }

  render() {
    const { title } = this.state
    return (
      <View>
        <Text>{title}</Text>
      </View>
    )
  }
}

export default SignUp
