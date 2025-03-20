let backgroundBody = document.getElementById('container');
let openModel = document.getElementById('openModel');
let contentText = document.getElementById('content');
let exitModel = document.getElementById('exit');

openModel.onclick = function() {
    contentText.style.display = 'block';
    openModel.style.background = 'gray';
    backgroundBody.style.background = 'gray';
}

exit.onclick = function() {
    contentText.style.display = 'none';
    openModel.style.background = 'white';
    backgroundBody.style.background = 'white';
}