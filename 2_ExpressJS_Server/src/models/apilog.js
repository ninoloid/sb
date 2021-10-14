'use strict'
module.exports = (sequelize, DataTypes) => {
  class apiLog extends sequelize.Sequelize.Model {}

  apiLog.init({
    dateTime: DataTypes.STRING,
    endpoint: DataTypes.STRING,
    parameters: DataTypes.STRING
  }, { sequelize })
  return apiLog
}
