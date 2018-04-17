var ajaxRequest = new XMLHttpRequest();
ajaxRequest.addEventListener('readystatechange', function(r) {
  if(r.target.status === 200) {
    console.log(r.target.response);
  }
});
ajaxRequest.open("GET", "https://api.github.com/users/E0S", true);
ajaxRequest.send();
