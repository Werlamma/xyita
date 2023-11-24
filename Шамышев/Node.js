const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question(`Как вас зовут? `, name => {
    console.log(`Привет,${name}!!`)
    rl.close()
})
