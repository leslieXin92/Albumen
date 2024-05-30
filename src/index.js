require('module-alias/register')
const app = require('@/app')
const { APP_HOST, APP_PORT } = require('@/app/config')
const { log } = require('@/utils')

app.listen(APP_PORT, () => {
  log(`💪💪 Albumen is running at ${APP_HOST}:${APP_PORT}`)
})
