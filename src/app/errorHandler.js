const { useErrorReturn } = require('@/utils')

/** Global error handler */
const errorHandler = (error, ctx) => {
  ctx.status = ctx.errorStatus || 500
  ctx.body = useErrorReturn(error.message)
}

module.exports = errorHandler
