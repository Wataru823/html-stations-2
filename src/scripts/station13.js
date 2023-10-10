function changeBackgroundColor(e) {
  var text = document.getElementById('text');

  if (check.checked) {
    text.style.backgroundColor = 'red';
  }
  else {
    text.style.backgroundColor = '';
  }
}
