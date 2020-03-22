const btn = document.getElementById('button');
const body = document.querySelector('body');
const bgcolor = ['#f3a683', '#f7d794', '#778beb', '#786fa6','#63cdda', '#f8a5c2','#ff4d4d','#32ff7e','#cd84f1']

btn.addEventListener('click', changeBackground)

function changeBackground() {
    const colorIndex = parseInt(Math.random()*bgcolor.length+1)
    body.style.backgroundColor = bgcolor[colorIndex]
}


