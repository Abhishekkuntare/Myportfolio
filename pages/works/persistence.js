import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Persistence = () => (
  <Layout title="Persistence">
    <Container>
      <Title>
        Persistence <Badge>2022</Badge>
      </Title>
      <P>
        Persistence is the Employee management system. In this project we manage
        the details of Employee and able to perform the CRUD operations on the
        database.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="/soon">
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJs,SQL,Postman,MYSQL work bench</span>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Auth</Meta>
          Authentication and Autorization
        </ListItem>
      </List>

      <WorkImage src="/images/works/p1.png" alt="p1" />
      <WorkImage src="/images/works/p2.png" alt="p2" />
    </Container>
  </Layout>
)

export default Persistence
