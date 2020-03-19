'use strict'
const DataStore = require('./model/dataStore')

const execute = () => new Promise((resolve, reject) => {
  Promise.resolve()
    .then(() => {
      return new Promise((resolve, reject) => {
        try {
          const data = new DataStore()
          resolve(data.getProp())
        } catch (e) {
          reject(e)
        }
      })
    })
    .then((res) => {
      resolve(res)
    })
    .catch(reject)
})

module.exports = {
  execute
}
