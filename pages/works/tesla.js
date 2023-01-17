import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Tesla">
    <Container>
      <Title>
        Tesla <Badge> 2021</Badge>
      </Title>
      <P>
        Tesla 
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://tesla-cbfc3.web.app/">
            https://tesla-cbfc3.web.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJs, TailwindCss, Firebase</span>
        </ListItem>

        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/Abhishekkuntare">
            https://github.com/Abhishekkuntare <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/tesla1.png" alt="tesla" />
      <WorkImage src="/images/works/tesla2.png" alt="tesla" />
    </Container>
  </Layout>
)

export default Work
