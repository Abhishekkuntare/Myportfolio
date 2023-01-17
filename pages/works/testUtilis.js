import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="TextUtilis">
    <Container>
      <Title>
        TextUtilis <Badge>2021</Badge>
      </Title>
      <P>
        {' '}
        TextUtils can help you generate text or numbers. · Number Formatting
        ,uppercase lowecase extra space del and copy to clipboard.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <ListItem>
            <Meta>WEBSITE</Meta>
            <Link href="https://abhishekkuntare.github.io/text-utilis/#">
              https://abhishekkuntare.github.io/text-utilis/#
            </Link>
          </ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML,CSS,JS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/textutilis.png" alt="textutilis" />
    </Container>
  </Layout>
)

export default Work
