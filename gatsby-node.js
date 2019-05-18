/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const { promisify } = require('utils')
const path = require('path')
const fs = require('fs')
const showdown = require('showdown')
const yaml = require('js-yaml')
const markdownConverter = new showdown.Converter()

const isDirectory = source => fs.lstatSync(source).isDirectory()

const getDirectories = source =>
  fs.readdirSync(source).map(name => path.join(source, name)).filter(isDirectory)

const classesDirectory = './classes'






exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  yaml.safeLoad(fs.readFileSync(`./${classesDirectory}/classes.yml`, 'utf-8')).forEach(className => {
    let dirName = `${classesDirectory}/${className}`
    const classData = yaml.safeLoad(fs.readFileSync(`${dirName}/class.yml`, 'utf-8'))
    const lessonsID = []
    console.log(classData)
  classData.lessons.forEach(lessonID => {
    lessonsID.push(lessonID)
    const lessonData = yaml.safeLoad(fs.readFileSync(`${dirName}/${lessonID}/lesson.yml`, 'utf-8'))
    const resourcesID = []
   
    lessonData.resources.forEach(resource => {
      let resourceID = `${className.toLowerCase()}/${lessonID}/${resource.id}`
      resourcesID.push(resourceID)
      createNode({
        path: resourceID,
        ...resource,
        children: [],
        id: resourceID,
        parent: lessonID,
        internal: {
          type: `ResourceData`,
          contentDigest: 'resource',
        }
    })
    })
    createNode({
      ...lessonData.meta,
      children: [...resourcesID],
      id: lessonID,
      parent: className,
      internal: {
        type: `LessonData`,
        contentDigest: 'lesson',
      }
  })
  })
  console.log(classData.meta, lessonsID)
  createNode({
    ...classData.meta,
    children: [...lessonsID],
    id: className,
    parent: null,
    internal: {
      type: `ClassData`,
      contentDigest: `class`,
    }
})
  })

  // We're done, return.
  return
}
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const templateFor = (temp) => path.resolve(`src/templates/${temp}.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
        {
          allClassData {
            edges {
              node {
                id
                title
                desc
                color,
                imageUrl,
                childrenLessonData{
                  title,
                  id,
                  childrenResourceData{
                    title,
                    type,
                    id,
                    path,
                    imageFile,
                    embedUrl
                  }
                }
              }
            }
          }
        }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        console.log(result)
        // Create pages for each markdown file.
        result.data.allClassData.edges.forEach(({ node }) => {
          if(node.childrenLessonData){
            node.childrenLessonData.forEach(lesson => {
              if(lesson.childrenResourceData){
              lesson.childrenResourceData.forEach(resource => {
                
               
                  let filePath = `${classesDirectory}/${node.id}/${lesson.id}/resources/${resource.type}s/${resource.id.split('/').pop()}`
                  switch(resource.type){
                    case 'article':
                      let contents = fs.readFileSync(`${filePath}.md`).toString()
                      console.log(`${classesDirectory}/${node.id}/${lesson.id}/assets/${resource.imageFile}`, fs.readFileSync(`${classesDirectory}/${node.id}/${lesson.id}/assets/${resource.imageFile}`))
                      createPage({
                        path: `/class/${resource.path}`,
                        component: templateFor('Article'),
                        // In your blog post template's graphql query, you can use path
                        // as a GraphQL variable to query for data from the markdown file.
                        context: {
                          resource: {
                            id: resource.id,
                            title: resource.title,
                            class: {
                              id: node.id,
                              title: node.title,
                              color: node.color
                            },
                            lesson: {
                              title: lesson.title
                            },
                            contents: markdownConverter.makeHtml(contents),
                            image: fs.readFileSync(`${classesDirectory}/${node.id}/${lesson.id}/assets/${resource.imageFile}`)
                          }
                        },
                      })
                      break;
                    case 'presentation':
                    createPage({
                      path: `/class/${resource.path}/present`,
                      component: path.resolve(`${filePath}.js`)
                    })
                    createPage({
                      path: `/class/${resource.path}`,
                      component: templateFor('Presentation'),
                      context: {
                        resource: {
                          id: resource.id,
                          title: resource.title,
                          class: {
                           id: node.id,
                           title: node.title,
                           color: node.color
                          },
                          lesson: {
                            title: lesson.title
                          }
                        }
                      }
                    })
                    break;
                    case 'embed':
                    createPage({
                      path: `/class/${resource.path}`,
                      component: templateFor('Embed'),
                      context: {
                        resource: {
                          id: resource.id,
                          title: resource.title,
                          embedUrl: resource.embedUrl,
                          class: {
                           id: node.id,
                           title: node.title,
                           color: node.color
                          },
                          lesson: {
                            title: lesson.title
                          }
                        }
                      }
                    })
                    break;
                  }
               
            
              })
            }
            })
                
           
          }

          createPage({
            path: `/class/${node.id.toLowerCase()}`,
            component: templateFor('ClassOverview'),
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              class: node
            },
          })
        })
      })
    )
  })
}
// exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
//   if (stage === "build-html") {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /spectacle/,
//             use: loaders.null(),
//           },
//           {
//             test: /webfontloader/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     })
//   }
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, "src"), path.resolve(__dirname, "classes")],
//     },
//   })
// }
