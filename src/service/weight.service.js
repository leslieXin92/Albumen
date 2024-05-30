const dayjs = require('dayjs')
const { useDatabase } = require('@/app/database')

const getWeightRecords = async (month) => {
  const monthStart = dayjs(month).startOf('month').toDate()
  const monthEnd = dayjs(month).endOf('month').toDate()
  const { connectDatabase, disconnectDatabase, execute } = useDatabase()
  await connectDatabase()
  const statement = `
    SELECT DATE_FORMAT(date, '%Y-%m-%d') as date, weight
    FROM weight_records
    WHERE date >= ?
    AND date <= ?;
  `
  const [records] = await execute(statement, [monthStart, monthEnd])
  await disconnectDatabase()
  return records.map(r => ({ ...r, weight: parseFloat(r.weight) }))
}

const insertWeightRecord = async (date, weight) => {
  const { connectDatabase, disconnectDatabase, execute } = useDatabase()
  await connectDatabase()
  const statement = `
    INSERT INTO weight_records
    (date, weight) VALUES(?, ?);
  `
  const [records] = await execute(statement, [date, Number(weight)])
  await disconnectDatabase()
  return records
}

const updateWeightRecord = async (date, weight) => {
  const { connectDatabase, disconnectDatabase, execute } = useDatabase()
  await connectDatabase()
  const statement = `
    UPDATE weight_records
    SET weight = ?
    WHERE date = ?;
  `
  const [records] = await execute(statement, [Number(weight), date])
  await disconnectDatabase()
  return records
}

module.exports = {
  getWeightRecords,
  insertWeightRecord,
  updateWeightRecord
}
