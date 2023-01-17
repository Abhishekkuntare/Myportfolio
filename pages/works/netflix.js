import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Netflix">
    <Container>
      <Title>
        Netflix <Badge>2021</Badge>
      </Title>
      <P>
        Netflix is a streaming service that offers a wide variety of
        award-winning TV shows, movies, anime, documentaries, and more on
        thousands of ...
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://netflix-153d3.web.app/">
            https://netflix-153d3.web.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs, Redux , Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/netflix2.png" alt="mode.tokyo" />

      <WorkImage src="/images/works/netflix1.png" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work
