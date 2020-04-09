'use strict'
const request = require('request-promise')

module.exports = class SettingApi {
  constructor () {
    this.option = {
      url: 'https://yamachita0109.github.io/json/setting.json',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      json: true
    }

    this.name = ''
    this.age = ''
  }

  getName () {
    return this.name
  }

  getAge () {
    return this.age
  }

  call () {
    return new Promise((resolve, reject) => {
      request(this.option)
        .then((result) => {
          this.name = result.name
          this.age = result.age
          resolve(this)
        })
        .catch(reject)
    })
  }
}
