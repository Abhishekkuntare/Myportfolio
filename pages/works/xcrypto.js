import React from 'react'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Lamborgihini">
    <Container>
      <Title>
        XCrypto <Badge>2023-</Badge>
      </Title>
      <P>
        XCrypto is the web app which can fetch the real time data from external
        API. To fetching the data i simply used the axios to make request.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://x-crypto-two.vercel.app/">
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, React router dom, API,Vercel,CSS</span>
        </ListItem>
        <ListItem>
          <Meta>HOST</Meta>
          Vercel
        </ListItem>
      </List>

      <WorkImage src="/images/works/x1.png" alt="lambomap" />
      <WorkImage src="/images/works/x2.png" alt="lambomap" />
    </Container>
  </Layout>
)

export default Work
