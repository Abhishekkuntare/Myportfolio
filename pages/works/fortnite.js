import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="fortnite">
    <Container>
      <Title>
        Fortnite <Badge>2021</Badge>
      </Title>
      <P>
        Fortnite is an online video game developed by Epic Games and released
        in2017.Im made the clone that.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://fortnite-6eceb.web.app/">
            https://fortnite-6eceb.web.app/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs, Animation, Firebase</span>
        </ListItem>
        <ListItem>
          <Meta>Woking</Meta>
          <span>The website is on Maintaince...</span>
        </ListItem>
      </List>
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/fortnite3.png" alt="fortnite" />
        <WorkImage src="/images/works/fortnite2.png" alt="fortnite" />
      </SimpleGrid>
      <WorkImage src="/images/works/fortnite01.png" alt="fortnite" />
    </Container>
  </Layout>
)

export default Work
