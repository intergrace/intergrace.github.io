fetch("https://api.ipify.org/")
  .then(function(res) {return res.text()})
  .then(function(data) {
    if (data) {
      document.getElementById('downloader').value = data
    }
  })