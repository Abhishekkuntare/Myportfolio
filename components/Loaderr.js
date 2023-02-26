import { Box } from '@chakra-ui/react'
import { Loader } from '@react-three/drei'
import React from 'react'

const Loaderr = () => {
  return (
    <Box
      position={'fixed'}
      top={'60%'}
      left={'50%'}
      // minH={'10vh'}
      // display={'flex'}
      // alignItems="center"
      // justifyContent={'center'}
    >
      <Loader />
    </Box>
  )
}

export default Loaderr
