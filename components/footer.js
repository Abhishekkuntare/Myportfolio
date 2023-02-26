import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
  Button,
  Image,
  Heading
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Loaderr from './Loaderr'

export default function LargeWithAppLinksAndSocial() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return !loaded ? (
    <Loaderr />
  ) : (
    <Box>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={10}
        m={'auto'}
        display="flex"
        alignItems={['left', 'center']}
        justifyContent={['left', 'center']}
      >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <Heading as="h3" variant="section-title">
              Company
            </Heading>
            <Link color={['teal.300']} href={'/works'}>
              Works
            </Link>
            <Link color={['teal.300']} href={'/courses'}>
              Courses
            </Link>
            <Link color={['teal.300']} href={'/web'}>
              Web
            </Link>
            <Link color={['teal.300']} href={'/app'}>
              App
            </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Heading as="h3" variant="section-title">
              Support
            </Heading>
            <Link color={['teal.300']} href={'/posts'}>
              Posts
            </Link>
            <Link color={['teal.300']} href={'/'}>
              Home
            </Link>
            <Link color={['teal.300']} href={'#'}>
              Community Guidelines
            </Link>
          </Stack>

          <Stack align={'flex-start'}>
            <Image
              width={[100, 100]}
              src="https://www.joshwcomeau.com/assets/me-light.webp"
              alt="img"
            />
          </Stack>
        </SimpleGrid>
      </Container>
      <Image
        width={[1800, 800]}
        src="https://www.joyofreact.com/images/question-mobile.svg"
        alt='img'
      />

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}
        >
          <Text>© 2023- present Abhishek Kuntare. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <Button
              label={'Twitter'}
              href={'/https://www.linkedin.com/in/abhishek-kuntare-65662421b/'}
            >
              <FaLinkedin />
            </Button>
            <Button
              label={'YouTube'}
              href={'/https://github.com/Abhishekkuntare'}
            >
              <FaGithub />
            </Button>
            <Button
              label={'Instagram'}
              href={'/https://www.instagram.com/abhishek__kuntare/'}
            >
              <FaInstagram />
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}