import express from 'express'
import { Bootstrap } from './infrastructure/bootstrap/init'
import { Container } from './core/DI/container'
import { TYPE } from './domain/DI/type'
import { PlaceholderRouter } from './interface/http/express/router/placeholderExpressRouter'

new Bootstrap()


const container = Container.get()
const app = express()
const port = 3000
const placeholderRouter = container.get<PlaceholderRouter>(TYPE.PlaceholderRouter)
app.use(express.json());

app.use('/', placeholderRouter.exec())


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})