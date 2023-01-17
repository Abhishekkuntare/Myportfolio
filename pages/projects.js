import { Box, Flex, Badge, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  const web = {
    imageUrl:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    imageAlt: 'Web developement'
  }
  const app = {
    imageUrl:
      'https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    imageAlt: 'App developement'
  }
  const machine = {
    imageUrl:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    imageAlt: 'Machine learning'
  }
  const python = {
    imageUrl:
      'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    imageAlt: 'Machine learning'
  }
  return (
    <>
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <Box maxW="lg" overflow="hidden">
          <Image borderRadius={10} src={web.imageUrl} alt={web.imageAlt} />
          <Box
            cursor={'pointer'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="6"
          >
            <Box display="flex" alignItems="baseline">
              <Link passHref={true} size={1} href="/works">
                <Badge
                  position="relative"
                  bottom={20}
                  borderRadius="5px"
                  fontSize={30}
                  px="2"
                  color={'#81E6D9'}
                >
                  Web Development
                </Badge>
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <Box maxW="lg" overflow="hidden">
          <Image borderRadius={10} src={app.imageUrl} alt={app.imageAlt} />
          <Box
            cursor={'pointer'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="6"
          >
            <Box display="flex" alignItems="baseline">
              <Link passHref={true} size={1} href="/androidWorks">
                <Badge
                  position="relative"
                  bottom={20}
                  borderRadius="5px"
                  fontSize={30}
                  px="2"
                  color={'#90CDF4 '}
                >
                  App Development
                </Badge>
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <Box maxW="lg" overflow="hidden">
          <Image
            borderRadius={10}
            src={machine.imageUrl}
            alt={machine.imageAlt}
          />
          <Box
            cursor={'pointer'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="6"
          >
            <Box display="flex" alignItems="baseline">
              <Link passHref={true} size={1} href="/machine_learning">
                <Badge
                  position="relative"
                  bottom={20}
                  borderRadius="5px"
                  fontSize={30}
                  px="2"
                  color={'#D6BCFA '}
                >
                  Machine Learning
                </Badge>
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
      >
        <Box maxW="lg" overflow="hidden">
          <Image
            borderRadius={10}
            src={python.imageUrl}
            alt={python.imageAlt}
          />
          <Box
            cursor={'pointer'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            p="6"
          >
            <Box display="flex" alignItems="baseline">
              <Link passHref={true} size={1} href="/python_projects">
                <Badge
                  position="relative"
                  bottom={20}
                  borderRadius="5px"
                  fontSize={30}
                  px="2"
                  color={'#DD6B20 '}
                >
                  Python Projects
                </Badge>
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default Projects
