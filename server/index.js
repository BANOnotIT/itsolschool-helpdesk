/**
 * Created by BANO.notIT on 20.10.18.
 */

const
    express = require('express')
    , path = require('path')


const app = express()

app
    .use(express.static(path.join(__dirname, '../dist/')))
    .use((req, res) =>
        res.sendFile(path.join(__dirname, '../dist/index.html'))
    )
    .listen(process.env.PORT, () => console.log(`Listening on ${process.env.PORT}`))
