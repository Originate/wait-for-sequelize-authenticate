#!/usr/bin/env node

const connectWithRetry = require('./index')
const path = require('path')

const sequelizeInstance = require(path.resolve(process.argv[2]))

async function main() {
  await connectWithRetry(sequelizeInstance, 1000)
  process.exit(0)
}

main()
