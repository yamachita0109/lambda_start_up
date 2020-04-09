'use strict'
const Setting = require('./model/setting')

const execute = () => new Promise((resolve, reject) => {
  Promise.resolve()
    .then(() => {
      const setting = new Setting()
      return setting.create()
    })
    .then((res) => {
      resolve(res.name)
    })
    .catch(reject)
})

module.exports = {
  execute
}
