import { StyleSheet } from 'react-native'

import { metrics } from '../../theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeIndicator: {
    marginVertical: metrics.spacing.unit,
  },
})

export default styles
