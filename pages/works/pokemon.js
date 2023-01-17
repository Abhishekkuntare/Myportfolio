import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Persistence = () => (
  <Layout title="Pokemon">
    <Container>
      <Title>
        Pokemon <Badge>2023</Badge>
      </Title>
      <P>
        Pokemon is the very famouse cartoon. Accroding to Pokemon iam using one
        API to fetch all the information about Pokemon and also use the search
        fuctionality in it;
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://pokemon-liard-eta.vercel.app/">
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML , CSS , Javascript , Github , Vercel</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Function</Meta>
          Search Fuctionality, Responsive
        </ListItem>
      </List>

      <WorkImage src="/images/works/po1.png" alt="p1" />
      <WorkImage src="/images/works/po2.png" alt="p2" />
    </Container>
  </Layout>
)

export default Persistence
