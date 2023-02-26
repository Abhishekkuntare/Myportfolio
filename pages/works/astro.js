import React from 'react'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Abhishek from '../../components/Slider_ast'

const Work = () => (
  <Layout title="Astro">
    <Container>
      <Title>
        Astro <Badge>2021-</Badge>
      </Title>
      <P>
        Astro is a E-Commerce website, We strive to deliver the best quality
        products and services and are always there to help both before and after
        you have made your purchase!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="/soon">
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, ReactJS, ExpressJS, Mongodb</span>
        </ListItem>
        <ListItem>
          <Meta>HOST</Meta>
          Heroku
        </ListItem>
      </List>

      <WorkImage src="/images/works/Astro01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/Astro02.png" alt="Inkdrop" />
    </Container>
    <Abhishek />
  </Layout>
)

export default Work
