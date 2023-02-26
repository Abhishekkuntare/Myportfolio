import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import NextLink from 'next/link'

const soon = () => {
  return (
    <Box display={'flex'} alignItems={'center'}>
      <NextLink href="/">
        <Button>
          <Text fontSize={'lg'} fontFamily="M+PLUS+Rounded" mr={10}>
            Currently working...
          </Text>
          <AiOutlineHome />
        </Button>
      </NextLink>
    </Box>
  )
}

export default soon
