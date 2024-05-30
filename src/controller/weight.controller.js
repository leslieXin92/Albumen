const { getWeightRecords, insertWeightRecord, updateWeightRecord } = require('@/service')
const { useSuccessReturn, throwError } = require('@/utils')

const handleGetWeightRecords = async (ctx) => {
  const { month } = ctx.query
  try {
    const records = await getWeightRecords(month)
    ctx.body = useSuccessReturn(records)
  } catch (e) {
    throwError(ctx, e.message)
  }
}

const handleInsertWeightRecord = async (ctx) => {
  const { date, weight } = ctx.request.body
  try {
    await insertWeightRecord(date, weight)
    ctx.body = useSuccessReturn()
  } catch (e) {
    throwError(ctx, e.message)
  }
}

const handleUpdateWeightRecord = async (ctx) => {
  const { date, weight } = ctx.request.body
  try {
    await updateWeightRecord(date, weight)
    ctx.body = useSuccessReturn()
  } catch (e) {
    throwError(ctx, e.message)
  }
}

module.exports = {
  handleGetWeightRecords,
  handleInsertWeightRecord,
  handleUpdateWeightRecord
}
