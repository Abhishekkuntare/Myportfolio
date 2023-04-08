import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  Link
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoCodeSharp, IoLogoLinkedin } from 'react-icons/io5'
import { BiCodeCurly } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import Loaderr from '../components/Loaderr'
import TimeLine from '../components/timeLine'

function Home() {
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
    <Layout>
      <Container>
        <Box
          mb={6}
          mt={10}
          p={3}
          fontSize={'lg'}
          textAlign="center"
          fontFamily={'Luxurious Roman'}
          fontWeight={'bold'}
          borderRadius="lg"
        >
          Hello, I&apos;m
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Abhishek Kuntare
            </Heading>
            <p>Software Engineer ( Web / App / Developer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="blue.100"
              borderWidth={3}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/abhi.jpg"
              alt="Profile image"
              cursor={'none'}
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Intro
          </Heading>
          <Paragraph>
            My name is Abhishek P. Kuntare I{"'"}m a Software Developer from
            Amravati. I{"'"}m an experienced FullStack web Developer engineer
            who constantly seeks out innovative solutions to everyday problems
            in my daily life. In my 3+ years in this field, I{"'"}ve honed my
            analytical thinking and collaboration skills, and I love working
            with a team. I am a quick learner and ready to take new challenges.
          </Paragraph>

          <Box
            align="center"
            my={4}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}
          >
            <NextLink href="https://abhishekkuntare3d.vercel.app/">
              <Button
                mb={5}
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
              >
                3D
              </Button>
            </NextLink>

            <a href="AbhishekKuntare.pdf" download="AbhishekKuntare.pdf">
              <Button backgroundColor={'#00C9A7'} color={'white'}>
                Resume
              </Button>
            </a>
          </Box>
        </Section>

        <TimeLine />
        {/* <Hobbies /> */}

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Solving Cubes, Listening to music,Playing Football.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/abhishek-kuntare-65662421b/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @Linkdin
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://github.com/Abhishekkuntare" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @GitHub
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://leetcode.com/Abhishekkuntare/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={BiCodeCurly} />}
                >
                  @LeetCode
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link
                href="https://www.codechef.com/users/abhishek_0210"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoCodeSharp} />}
                >
                  @CodeChef
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://codeforces.com/profile/abhishekkuntare7"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoCodeSharp} />}
                >
                  @CodeForces
                </Button>
              </Link>
            </ListItem>
          </List>

          <Box align={['left', 'center']} my={4}>
            <NextLink href="/posts">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
