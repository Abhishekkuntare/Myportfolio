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
        @Lambo <Badge>2021-</Badge>
      </Title>
      <P>
        Lamborgihini clone is very price less for me. I included the login and
        logout funtionaliy in this project and all the users data will stored in
        the firebase
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://lamborghini-f74a3.web.app/">
            https://lamborghini-f74a3.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            ReactJS, React router dom, Authentication,Firebase,CSS,Material UI
          </span>
        </ListItem>
        <ListItem>
          <Meta>HOST</Meta>
          Firebase
        </ListItem>
      </List>

      <WorkImage src="/images/works/lambo.png" alt="lambomap" />
      <WorkImage src="/images/works/lambomap.png" alt="lambomap" />
    </Container>
  </Layout>
)

export default Work
