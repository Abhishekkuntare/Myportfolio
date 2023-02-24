import * as React from 'react'
import {
  Container,
  Box,
  chakra,
  Flex,
  Divider,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td
  // useColorModeValue
} from '@chakra-ui/react'

const networks = [
  {
    name: 'Programming',
    visotors: '90',
    visotorsRatio: '90%'
  },
  {
    name: 'Cube',
    visotors: '100',
    visotorsRatio: '100%'
  },
  {
    name: 'Football',
    visotors: '85',
    visotorsRatio: '85%'
  }
]

const Hobbies = () => {
  return (
    <Container maxW="3xl" py={10} px={4}>
      <Box
        border="1px solid"
        borderColor="gray.400"
        rounded="md"
        boxShadow="lg"
        overflow="hidden"
      >
        <Flex justify="left" p={5}>
          <chakra.h3
            fontSize="xl"
            fontWeight="bold"
            textAlign="center"
          ></chakra.h3>
        </Flex>
        <Divider />
        <TableContainer>
          <Table size="md">
            <Thead>
              <Tr fontWeight="900">
                <Th>Network</Th>
                <Th></Th>
                <Th>New Users Rate</Th>
              </Tr>
            </Thead>
            <Tbody>
              {networks.map((network, index) => (
                <Tr key={index}>
                  <Td fontSize="sm">{network.name}</Td>
                  <Td fontSize="sm">{network.visotors}</Td>
                  <Td>
                    <Box
                      w="100%"
                      // bg={useColorModeValue('gray.300', 'gray.600')}
                      rounded="md"
                    >
                      <Box
                        w={network.visotorsRatio}
                        h={2}
                        bg="blue.400"
                        rounded="md"
                      ></Box>
                    </Box>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  )
}

export default Hobbies
