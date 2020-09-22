const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  // console.log(node.internal.type)
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode }) // takes file names as actual name of the route.
    
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}