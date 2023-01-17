import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>
        DisneyPlus <Badge>2021</Badge>
      </Title>
      <P>
        Disney+ is the streaming home of Disney, Pixar, Marvel, Star Wars,
        National Geographic, and more. From new releases to your favorite
        classics and exclusive .
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://disney-plus-3dc00.web.app/">
            https://disney-plus-3dc00.web.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs,Firebase,Web</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Auth</Meta>
          We can auth with Google.
        </ListItem>
      </List>

      <WorkImage src="/images/works/disenyPlus1.png" alt="walknote" />
      <WorkImage src="/images/works/disneyPlus2.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
