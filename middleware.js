module.exports = (req, res, next) => {
  const reqNow = Date.now()
  const dateNow = new Date(reqNow)

  const yy = dateNow.getFullYear()
  const mm = dateNow.getMonth() + 1
  const dd = dateNow.getDate()
  const hours = dateNow.getHours()
  const min = dateNow.getMinutes()
  const sec = dateNow.getSeconds()
  const timeStamps = yy + '-' + mm + '-' + dd + ' ' + hours + ':' + min + ':' + sec
  if (req.url === '/favicon.ico') return
  console.log(timeStamps + ' | ' + req.method + ' from ' + req.url)

  next()
}