import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Text
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import useSound from 'use-sound'
const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const soundUrl = '/sounds/s1.wav'
  const [playbackRate, setPlaybackRate] = useState(0)

  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5
  })

  const handleClick = () => {
    play()
  }

  const consoleit = () => {
    setPlaybackRate()
  }

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={100}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Text onClick={consoleit}>
              <Logo />
            </Text>
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/projects" path={path}>
            <Text onClick={handleClick}>Works</Text>
          </LinkItem>
          <LinkItem href="/works" path={path}>
            <Text onClick={handleClick}>Web</Text>
          </LinkItem>
          <LinkItem href="/androidWorks" path={path}>
            <Text onClick={handleClick}>App</Text>
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            <Text onClick={handleClick}>Posts</Text>
          </LinkItem>
          <LinkItem href="/courses" path={path}>
            <Text onClick={handleClick}>Courses</Text>
          </LinkItem>
        </Stack>

        {/* for mobile ------------------------------------------------- */}
        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                set
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/projects" passHref>
                  <MenuItem onClick={handleClick} as={Link}>
                    Works
                  </MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem onClick={handleClick} as={Link}>
                    Web
                  </MenuItem>
                </NextLink>
                <NextLink href="/androidWorks" passHref>
                  <MenuItem onClick={handleClick} as={Link}>
                    App
                  </MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem onClick={handleClick} as={Link}>
                    Posts
                  </MenuItem>
                </NextLink>{' '}
                <NextLink href="/courses" passHref>
                  <MenuItem onClick={handleClick} as={Link}>
                    Courses
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
