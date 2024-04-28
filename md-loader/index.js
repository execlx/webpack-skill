const marked = require('marked')

module.exports = function(source) {
    const htmlContent = marked.marked(source)
    return `module.exports = ${JSON.stringify(htmlContent)}`
}