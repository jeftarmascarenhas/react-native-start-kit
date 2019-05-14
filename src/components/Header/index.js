import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

const Header = () => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => {}}>
      <Icon color="#222" size={30} name="arrow-left" />
    </TouchableOpacity>
    <Text>Header</Text>
  </View>
)

export default Header
