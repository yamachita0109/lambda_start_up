'use strict'
const SettingApi = require('../client/settingApi')

module.exports = class Setting {
  constructor () {
    this.name = ''
  }

  getName () {
    return this.name
  }

  create () {
    return new Promise((resolve, reject) => {
      Promise.resolve()
        .then(() => {
          const client = new SettingApi()
          return client.call()
        })
        .then((r) => {
          this.name = r.name
          resolve(this)
        })
        .catch(reject)
    })
  }
}
