const { throwError } = require('@/utils')

const verifyGetWeightRecordsParams = async (ctx, next) => {
  const { month } = ctx.query
  if (!month) return throwError(ctx, '没有month')
  await next()
}

const verifyInsertWeightRecordParams = async (ctx, next) => {
  const { date, weight } = ctx.request.body
  if (!date) return throwError(ctx, '没有date')
  if (weight === undefined) return throwError(ctx, '没有weight')
  await next()
}

module.exports = {
  verifyGetWeightRecordsParams,
  verifyInsertWeightRecordParams
}
