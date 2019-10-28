import e = require('express')

const app = e();
const port = 3000;

app.get('/', (req, res)=> {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})

//npm init
//npm install typescript
//npx tsc --init
//npm install express
//npm install @types/express
//npm start
//npm install socket.io
//npm install @types/socket.io