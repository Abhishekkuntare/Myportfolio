import { Box } from '@chakra-ui/react'
import { Loader } from '@react-three/drei'
import React from 'react'

const Loaderr = () => {
  return (
    <Box
      minH={'100vh'}
      display={'flex'}
      alignItems="center"
      justifyContent={'center'}
    >
      <Loader />
    </Box>
  )
}

export default Loaderr
