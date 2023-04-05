import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Button,
  Badge
} from '@chakra-ui/react'
import Link from 'next/link'
import android from '../Data/android.json'
import git from '../public/images/androidApp/git.png'
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
                <Badge borderRadius={3} padding={1}>
                  <Text
                    padding={2}
                    color={'gray.500'}
                    fontSize={'sm'}
                    textTransform={'uppercase'}
                  >
                    {data.name}
                  </Text>
                </Badge>
                <Heading
                  fontSize={'14px'}
                  textAlign="center"
                  fontFamily={'body'}
                  fontWeight={500}
                >
                  {data.desc}
                </Heading>
                <Stack direction={'row'} align={'center'}>
                  <Button marginTop={5}>
                    <Text fontWeight={800} fontSize={'xl'}>
                      <Link href={data.app_link}>Download</Link>
                    </Text>
                  </Button>
                  <Link href={data.git_link}>
                    <Image width={30} height={30} src={data.git} alt="git" />
                  </Link>
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
