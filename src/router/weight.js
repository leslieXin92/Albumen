const Router = require('koa-router')
const { verifyGetWeightRecordsParams, verifyInsertWeightRecordParams } = require('@/middleware')
const { handleGetWeightRecords, handleInsertWeightRecord, handleUpdateWeightRecord } = require('@/controller')

const weightRouter = new Router({ prefix: '/weight' })

weightRouter.get('/', verifyGetWeightRecordsParams, handleGetWeightRecords)
weightRouter.post('/', verifyInsertWeightRecordParams, handleInsertWeightRecord)
weightRouter.put('/', verifyInsertWeightRecordParams, handleUpdateWeightRecord)

module.exports = weightRouter
