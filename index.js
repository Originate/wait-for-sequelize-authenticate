async function connectWithRetry(sequelizeInstance, retryDelay) {
  try {
    await sequelizeInstance.authenticate()
    console.log('Connected') // eslint-disable-line no-console
    return
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(
      `Could not connect, retrying in ${retryDelay} milliseconds...`,
      error.toString()
    )
    await new Promise(resolve => setTimeout(resolve, retryDelay))
    await connectWithRetry(sequelizeInstance, retryDelay * 2)
  }
}

module.exports = connectWithRetry
