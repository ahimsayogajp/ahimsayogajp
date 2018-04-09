import React from 'react'

import * as contentfulWrapper from '../components/ContentfulWrapper'

class LandingTemplate extends React.Component {
  render () {
    const page = this.props.data.contentfulLanding

    return (
      <div>
        <h1>{page.title}</h1>
          {
            page.components.map(( component ) => {
              console.log(component.id)
              console.log(component.title)
              console.log(component.heading)
              console.log(component.parent)
              const componentName = component.parent.id + 'Wrapper';
              console.log(componentName)
              const ContentfulWrapper = contentfulWrapper[componentName];
              console.log(ContentfulWrapper)
              return (
                <ContentfulWrapper key={element.id} {...component} />
              );
            })
          }
      </div>
    )
  }
}

export default LandingTemplate

export const pageQuery = graphql`
query landingQuery($id: String!) {
  contentfulLanding(id: { eq: $id }) {
    title
    components {
      ... on ContentfulText {
        id
        parent {
          id
        }
        body {
          childMarkdownRemark {
            html
          }
        }
      }
      ... on ContentfulHero {
        id
        parent {
          id
        }
        body {
          childMarkdownRemark {
            html
          }
        }
        media {
          resolutions {
            base64
            aspectRatio
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
          }
        }
      }
      ... on ContentfulSchedule {
        id
        parent {
          id
        }
        heading
        components {
          id
          parent {
            id
          }
          title
          day
          time
          location {
            id
            slug
          }
        }
      }
      ... on ContentfulCollection {
        id
        parent {
          id
        }
        heading
        components {
          id
          parent {
            id
          }
          heading
          price
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
      ... on ContentfulLocationMap {
        id
        parent {
          id
        }
        heading
        components {
          id
          parent {
            id
          }
          heading
          location {
            lon
            lat
          }
        }
      }
    }
  }
}
`
