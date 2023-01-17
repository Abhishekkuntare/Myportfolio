import { Box, Text, Flex, chakra, Link, Image } from '@chakra-ui/react'
import * as React from 'react'
import Data from '../Data/python.json'

const python_projects = () => (
  <>
    {Data.map(data => (
      <Flex
        key={data.id}
        p={10}
        w="full"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          marginBottom={2}
          mx="auto"
          rounded="lg"
          shadow="md"
          bg="white"
          _dark={{
            bg: 'gray.800'
          }}
          maxW="2xl"
        >
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src={data.img}
            alt="Article"
          />

          <Box p={6} key={data.id}>
            <Box key={data.id}>
              <chakra.span
                fontSize="xs"
                textTransform="uppercase"
                color="brand.600"
                _dark={{
                  color: 'brand.400'
                }}
              >
                {data.open}
              </chakra.span>
              <Text
                display="block"
                color="gray.800"
                _dark={{
                  color: 'white'
                }}
                fontWeight="bold"
                fontSize="2xl"
                mt={2}
              >
                {data.name}
              </Text>
              <chakra.p
                mt={2}
                fontSize="sm"
                color="gray.600"
                _dark={{
                  color: 'gray.400'
                }}
              >
                {data.desc}
              </chakra.p>
            </Box>

            <Box mt={4} key={data.id}>
              <Flex alignItems="center">
                <Flex alignItems="center">
                  <Image
                    h={8}
                    fit="cover"
                    rounded="full"
                    src={data.git_img}
                    alt="Avatar"
                  />
                  <Link
                    href={data.app_link}
                    mx={2}
                    fontWeight="bold"
                    color="gray.700"
                    _dark={{
                      color: 'gray.200'
                    }}
                  >
                    Source-Code
                  </Link>
                </Flex>
                <chakra.span
                  mx={1}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: 'gray.300'
                  }}
                >
                  21 AUG 2022
                </chakra.span>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    ))}
  </>
)

export default python_projects
