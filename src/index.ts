/* eslint-disable @typescript-eslint/no-var-requires */
import App from './main/App'
import { connectToDb } from './shared/adapters/database/mongo'
import { masterRouter } from './shared/adapters/http/routes'
require('dotenv').config()

const { PORT } = process.env
const app: App = new App(connectToDb)

app.express.use('/', masterRouter)

app.express.listen(PORT, ():void => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
