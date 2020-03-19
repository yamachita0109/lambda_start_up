'use strict'
const usecase = require('usecase')
const log4js = require('log4js')
const logger = log4js.getLogger()

exports.handler = async (event) => {
  logger.level = process.env.LOG_LEVEL || 'trace'
  return new Promise((resolve, reject) => {
    Promise.resolve()
      .then(() => {
        return usecase.execute()
      })
      .then((res) => {
        resolve({
          response_data: res
        })
      })
      .catch((err) => {
        logger.error(err)
        reject(Error(JSON.stringify(err)))
      })
  })
}
