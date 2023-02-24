import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const courses = () => {
  return (
    <Box>
      <Box mt={20} bac>
        <Text textAlign={'center'} fontSize={30} fontWeight={'bold'}>
          {' '}
          Online Courses
        </Text>
        <Text
          pb={10}
          fontSize={22}
          m={'auto'}
          width={[300, 400]}
          textAlign={'center'}
        >
          Since 2020, my primary focus has been on creating interactive
          self-paced online courses. Heres what Ive produced so far.
        </Text>
      </Box>

      <Text
        mb={10}
        textAlign={'center'}
        fontWeight={'900'}
        fontSize={34}
        backgroundClip={'text'}
        backgroundSize={100}
        backgroundColor="rgb(255, 178, 62)"
        backgroundImage=" linear-gradient(to right top, #a2d195, #bfc884, #d8bd7e, #ebb285, #f6a895, #fea6b0, #f9a9cf, #e6b2ec, #bfc7ff, #85dcff, #4feeff, #5ffbf1)"
      >
        CSS for JavaScript Developers
      </Text>
      <Box
        display={'flex'}
        alignItems="center"
        justifyContent={'center'}
        flexWrap={'wrap'}
      >
        <Text
          pb={10}
          fontSize={22}
          m={'auto'}
          width={['300', '400']}
          textAlign={'center'}
        >
          I started tinkering with CSS way back in 2007, and I stumbled my way
          through it for a long time. I knew enough to get by, but it always
          felt arbitrary and precarious. I would often be baffled when a
          property didnt do what I expected it to do!
        </Text>
        <Image
          textAlign={'center'}
          m={'auto'}
          display={'flex'}
          alignItems="center"
          justifyContent={'center'}
          width={300}
          src="https://www.joshwcomeau.com/images/css-for-js-mascot-light.png?v=2"
          alt="img"
        />
      </Box>

      <Text
        mt={10}
        mb={10}
        textAlign={'center'}
        fontWeight={'900'}
        fontSize={34}
        backgroundClip={'text'}
        backgroundSize={100}
        backgroundColor="rgb(255, 178, 62)"
        backgroundImage="radial-gradient(circle, #6bd19d, #23cdb8, #00c6d3, #00bce8, #00aff2, #3fa8f7, #63a0f8, #8396f4, #9692f6, #aa8cf6, #be86f4, #d27eef)"
      >
        The Joy of React
      </Text>
      <Box
        display={'flex'}
        alignItems="center"
        justifyContent={'center'}
        flexWrap={'wrap'}
      >
        <Text
          pb={10}
          fontSize={22}
          m={'auto'}
          width={['300', '400']}
          textAlign={'center'}
        >
          Over the past few years, React has settled comfortably into its
          position as the dominant JavaScript framework. Itjs still growing,
          faster than any alternatives! Im not mad about it. I love working with
          React — Ive tried Angular, Vue, Svelte… and I keep coming back to
          React. with React — Ive tried Angular, Vue, Svelte… and I keep coming
          back to React.
        </Text>
        <Box>
          <Image
            textAlign={'center'}
            m={'auto'}
            display={'flex'}
            alignItems="center"
            justifyContent={'center'}
            width={300}
            src="https://www.joshwcomeau.com/images/joy-of-react-mascot-light.png?v=2"
            alt="img"
          />
        </Box>
      </Box>
    </Box>
  )
}

export default courses
