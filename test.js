const fs = require('fs')
const json = fs.readFileSync('../../Downloads/tf-gitops-322602-2772d6460a37.json').toString()
console.log(JSON.stringify(JSON.parse(json)))
