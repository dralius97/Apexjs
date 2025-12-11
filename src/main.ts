import express from 'express'
import { Bootstrap } from './infrastructure/bootstrap/init.ts'
import { Container } from './core/DI/container.ts'
import { TYPE } from './domain/DI/type.ts'
import { PlaceholderRouter } from './interface/http/express/router/placeholderExpressRouter.ts'
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