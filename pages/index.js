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
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoCodeSharp, IoLogoLinkedin } from 'react-icons/io5'
import { BiCodeCurly } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import Loaderr from '../components/Loaderr'

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
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          // bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
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
            My Self Abhishek P. Kuntare I am a Software Developer from Amravati.
            I am Programming enthusiast. I am quick learner and ready to take
            new challenges
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="https://abhishekkuntare2002.web.app/">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2002</BioYear>
            Born in Amravati, Maharashtra.
          </BioSection>
          <BioSection>
            <BioYear>2013-2018</BioYear>
            <i> SSCE X -</i> Shree Ram Krushna Krida Vidyalaya.
          </BioSection>
          <BioSection>
            <BioYear>2019-2020</BioYear>
            <i>HSCE XII</i> - Rural institute of JR College.
          </BioSection>
          <BioSection>
            <BioYear>2021-2024</BioYear>
            <i>B.Tech IT - </i> Prof.Ram Meghe Institute of Technology and
            Research
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Programming, Solving Cubes, Playing Football</Paragraph>
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

          <Box align="center" my={4}>
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
