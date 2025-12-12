import express from 'express'
import { Bootstrap } from './infrastructure/bootstrap/init.js'
import { Container } from './core/DI/container.js'
import { TYPE } from './domain/DI/type.js'
import { PlaceholderRouter } from './interface/http/express/router/placeholderExpressRouter.js'

new Bootstrap()


const container = Container.get()
const app = express()
const port = 3000
app.use(express.json());

const placeholderRouter = container.get<PlaceholderRouter>(TYPE.PlaceholderRouter)






app.use('/', placeholderRouter.exec())




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})