var rep = null;
// var test = document.getElementsByTagName('button')
// console.log(test);
// test.addEventListener('click', function(r) {
//   getUser(document.getElementsByTagName('input').value)
// })

document.getElementsByTagName('button')[0].addEventListener('click', function(r) {
  getUser(document.getElementsByTagName('input')[0].value);
});

document.getElementsByTagName('input')[0].addEventListener("keyup", function(r) {
  // Cancel the default action, if needed
  r.preventDefault();
  // Number 13 is the "Enter" key on the keyboard
  if (r.keyCode === 13) {
    // Trigger the button element with a click
    getUser(document.getElementsByTagName('input')[0].value);
  }
});

//getting userdata throgh github Api as json.
// getUser();
function getUser(name){
  // fetch('https://api.github.com/users/E0S')
  fetch('https://api.github.com/users/' + name )
  .then(function(r) {
    return r.json();
  })

  //Adding userdata to html
  .then(function(j) {
    console.log(j);
    rep = j;
    assingValus();
  })
}

function assingValus() {
  document.getElementById('username').innerText = rep.login;
  document.getElementById('realName').innerText = rep.name;
  document.getElementById('location').innerText = rep.location;
  document.getElementById('bio').innerText = rep.bio;
  document.getElementById('followers').innerText = rep.followers;
  document.getElementById('avatar').src = rep.avatar_url;
}
