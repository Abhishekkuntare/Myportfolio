import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Persistence = () => (
  <Layout title="Persistence">
    <Container>
      <Title>
        Madebyme <Badge>2023</Badge>
      </Title>
      <P>
        Madebyme Inc. is based massive open online course provider.Madebyme
        works with online courses, certifications, and degrees in a variety of
        subjects.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://madebyme.vercel.app/">
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs,Node js,Express,MongoDB,APIs,etc.</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Server</Meta>
          Vercel & Render
        </ListItem>
      </List>

      <WorkImage src="/images/works/m2.png" alt="p1" />
      <WorkImage src="/images/works/m3.png" alt="p2" />
    </Container>
  </Layout>
)

export default Persistence
