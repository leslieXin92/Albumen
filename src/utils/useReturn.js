const useReturn = (code, data, msg) => {
  return { code, data, msg }
}

const useSuccessReturn = (result = {}, message = 'Success!') => {
  return useReturn(0, result, message)
}

const useErrorReturn = (message) => {
  return useReturn(1, {}, message)
}

module.exports = {
  useReturn,
  useSuccessReturn,
  useErrorReturn
}
