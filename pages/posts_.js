import React from 'react'
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  useColorModeValue,
  Container,
  Button
} from '@chakra-ui/react'
import ManualClose from '../components/modal'

export const BlogAuthor = props => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
    </HStack>
  )
}

const ArticleList = ({ name, image, title, desc, color, id }) => {
  return (
    <>
      <Container maxW={'7xl'} p="12">
        <Heading as="h1">{name}</Heading>
        <Box
          key={id}
          marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: '100%', sm: '85%' }}
              zIndex="2"
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop="5%"
            >
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  borderRadius="lg"
                  src={image}
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  'radial(orange.600 1px, transparent 1px)',
                  'radial(orange.300 1px, transparent 1px)'
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: '3', sm: '0' }}
          >
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                {title}
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize="lg"
            >
              {desc}
            </Text>
            <Button
              fontSize="0.8em"
              borderRadius={5}
              marginTop={3}
              textAlign={'center'}
              colorScheme={color}
              variant="outline"
            >
              <ManualClose id={id} name={name} image={image} />
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default ArticleList
