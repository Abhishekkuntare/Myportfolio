import React from 'react'
import ArticleList from './posts_'

const Posts = () => {
  return (
    <>
      <ArticleList
        id={1}
        name={'World of Technologies'}
        image={
          'https://i.pinimg.com/736x/f6/fb/4e/f6fb4e096a8956726541c10ba8a23a8f.jpg'
        }
        title={'New Technologies'}
        desc={
          'What is technological world? 1 the application of practical sciences to industry or commerce. 2 the methods, theory, and practices governing such application. a highly developed technology. 3 the total knowledge and skills available to any human society for industry, art, science, etc.'
        }
        author={'abhishek'}
        date={'09-09-22'}
        color="purple"
      />
      <ArticleList
        id={2}
        name={'Web Technology'}
        image={'https://cms.replit.com/assets/hosting.png'}
        title={'Tech - Web'}
        desc={
          'Web Technology refers to the various tools and techniques that are utilized in the process of communication between different types of devices over the internet. A web browser is used to access web pages. Web browsers can be defined as programs that display text, data, pictures, animation, and video on the Internet.'
        }
        author={'abhishek'}
        date={'09-09-22'}
        color="purple"
      />
      <ArticleList
        id={3}
        name={'Vs code massive update'}
        image={'https://cms.replit.com/assets/workspace.png'}
        title={'Vs-code'}
        desc={
          'How do I update my VS Code? You can also manually check for updates by running Help > Check for Updates on Linux and Windows or running Code > Check for Updates on macOS. Note: You can disable auto-update if you prefer to update VS Code on your own schedule.'
        }
        author={'Jack '}
        date={'09-09-22'}
        color="green"
      />
      <ArticleList
        id={4}
        name={'Mac ui change for coding'}
        image={
          'https://saas-ui.dev/_ipx/w_1920,q_75/%2Fscreenshots%2Flist.png?url=%2Fscreenshots%2Flist.png&w=1920&q=75'
        }
        title={'Mac - Ui'}
        desc={
          'What is UI in Mac? The user interface (UI) refers to the style and feel of how an operating system or software product feels and acts. It is what you see and do. In Mac OS X, the graphical user interface (GUI) is based on the Aqua theme, menu bar, and iOS-like features..'
        }
        author={'Aniket '}
        date={'02-10-22'}
        color="red"
      />
    </>
  )
}

export default Posts

// import React from 'react'

// const Posts = () => {
//   return <div>posts</div>
// }

// export default Posts
