import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Persistence = () => (
  <Layout title="Amba Motors">
    <Container>
      <Title>
        Amba Motors <Badge>2023</Badge>
      </Title>
      <P>
        Amba Motors Inc. We are providing the services to our customer and do
        work faithfully, Neat and clean without any brokness we have last 25+
        years experience in this field so We know how to tackle in any
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://ambamotors.vercel.app/">
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

      <WorkImage src="/images/works/am2.png" alt="p1" />
      <WorkImage src="/images/works/am3.png" alt="p2" />
    </Container>
  </Layout>
)

export default Persistence
