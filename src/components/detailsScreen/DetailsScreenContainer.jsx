import React from 'react'
import { Platform } from 'react-native'

import { BACKGROUND_IMAGE } from '../../assets/images'
import { Container, ImageCustom } from '../common'

const DetailsScreenContainer = ({ children }) => (
  <Container
    justifyContent='flex-start'
    marginHorizontal={5}
    marginVertical={Platform.select({ android: 5 })}
  >
    <ImageCustom source={BACKGROUND_IMAGE} />
    {children}
  </Container>
)

export default DetailsScreenContainer