const { apiLog } = require('../../models')
console.log('xxxxxxxx', apiLog);

module.exports = async (req, _, next) => {
  try {
    if (process.env.NODE_ENV === 'development') {
      const url = `${req.method} : ${req.url}`
      await apiLog.create({
        dateTime: new Date().toLocaleString(),
        endpoint: url,
        parameters: JSON.stringify(req.query)
      })
    }
  } catch {}
  next()
}
