import React from 'react'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../components/work'
import P from '../components/paragraph'
import Layout from '../components/layouts/article'
import machine from '../Data/machineL.json'

const machine_learning = () => {
  return (
    <div>
      {machine.map(data => (
        <div key={data.id}>
          <Layout title="lastBook">
            <Container>
              <Title>
                {data.name}
                <Badge>-2022-</Badge>
              </Title>
              <P>{data.desc}</P>
              <List ml={4} my={4}>
                <ListItem>
                  <Meta>Website</Meta>
                  <Link href={'/soon'}>
                    <ExternalLinkIcon mx="2px" />
                  </Link>
                </ListItem>
                <ListItem>
                  <Meta>Platform</Meta>
                  <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                  <Meta>Stack</Meta>
                  <span>{data.stack}</span>
                </ListItem>
                <ListItem>
                  <Meta>HOST</Meta>
                  {data.host}
                </ListItem>
              </List>

              <WorkImage src={data.img} alt="Inkdrop" />
            </Container>
          </Layout>
        </div>
      ))}
    </div>
  )
}

export default machine_learning
