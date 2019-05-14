import React, { Component } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import PropTypes from 'prop-types'

import { translate } from '../../locales'
import { colors } from '../../theme'
import styles from './styles'

class AuthLoading extends Component {
  constructor(props) {
    super(props)
    this.bootStrapAsync()
  }

  bootStrapAsync = async () => {
    const { navigation } = this.props
    const userToken = await AsyncStorage.getItem('userToken')
    navigation.navigate(userToken ? 'App' : 'Auth')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{translate('Loading')}</Text>
        <ActivityIndicator size="large" style={styles.activeIndicator} color={colors.active} />
      </View>
    )
  }
}

AuthLoading.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
}

export default AuthLoading
