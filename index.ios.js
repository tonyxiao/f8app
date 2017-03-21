


module.exports = function (cb) {
  console.log('hello world');
  setTimeout(function() {
    cb(null, 'Hi niels');
  }, 2000)
}
