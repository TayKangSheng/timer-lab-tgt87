document.addEventListener('DOMContentLoaded', function () {
  var resetTime = document.getElementById('reset')
  var startTime = document.getElementById('start')
  var pauseTime = document.getElementById('pause')
  var seconds = 0
  var timerId = document.getElementById('timer')

  function updateTime () {
    var start = setInterval(function () {
      timerId.innerHTML = 'Time elapsed: ' + seconds
      seconds++ }, 1000)

    pauseTime.addEventListener('click', pause)
    function pause () {
      clearInterval(start)
    }

    resetTime.addEventListener('click', reset)
    function reset () {
      clearInterval(start)
      seconds = 0
      timerId.textContent = 'Stop Watch'
    }
  }
  startTime.addEventListener('click', updateTime)
})
