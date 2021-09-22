/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import cors from 'cors'

class App {
  public express: express.Application
  public dbConnector: any

  public constructor (dbConnector: any) {
    this.dbConnector = dbConnector
    this.express = express()
    this.middlewares()
    this.database()
  }

  private middlewares ():void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database ():void {
    this.dbConnector()
  }
}

export default App
