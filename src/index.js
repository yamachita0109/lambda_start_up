const usecase = require('usecase')

exports.handler = async (event) => {
  return new Promise((resolve, reject) => {
    Promise.resolve()
      .then(() => {
        return usecase.execute()
      })
      .then((res) => {
        resolve({
          response_data: {
            template_data: res
          }
        })
      })
  })
}
