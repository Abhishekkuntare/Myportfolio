import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Button
} from '@chakra-ui/react'
import android from '../Data/android.json'
const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'

function AndroidWorks() {
  return (
    <>
      {android.map(data => (
        <div key={data.id}>
          <Center py={12}>
            <Box
              role={'group'}
              p={6}
              maxW={'330px'}
              w={'full'}
              boxShadow={'2xl'}
              rounded={'lg'}
              pos={'relative'}
              zIndex={1}
            >
              <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'230px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${IMAGE})`,
                  filter: 'blur(15px)',
                  zIndex: -1
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(20px)'
                  }
                }}
              >
                <Image
                  rounded={'lg'}
                  height={230}
                  width={282}
                  objectFit={'cover'}
                  src={data.img}
                  alt="data_img"
                />
              </Box>
              <Stack pt={10} align={'center'}>
                <Text
                  padding={2}
                  fontSize={'sm'}
                  fontWeight={'900'}
                  textTransform={'uppercase'}
                >
                  {data.name}
                </Text>
                <Heading
                  fontSize={'14px'}
                  textAlign="center"
                  fontFamily={'body'}
                  fontWeight={500}
                >
                  {data.desc}
                </Heading>
                <Stack direction={'row'} align={'center'}>
                  <Button
                    mt={10}
                    backgroundColor={'#46D6C1'}
                    _hover={{
                      backgroundColor: '#76FAC7'
                    }}
                  >
                    <Text fontWeight={500} fontSize={18}>
                      <a target="_blank" href={data.git_link}>
                        Download
                      </a>
                    </Text>
                  </Button>
                  <Box mt={10}>
                    <Button
                      mt={10}
                      backgroundColor={'#58B0FF'}
                      _hover={{
                        backgroundColor: '#CEB5FF'
                      }}
                    >
                      <Text fontWeight={500} fontSize={18}>
                        <a target="_blank" href={data.git_link}>
                          Source Code
                        </a>
                      </Text>
                    </Button>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Center>
        </div>
      ))}
    </>
  )
}

export default AndroidWorks
