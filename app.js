
const board = document.querySelector('#board')
const colors = ['#ff4081','#e74c3c','#3949ab','#18ffff', '#8e44ad', '#ffee58','#3498db', '#e67e22', '#2ecc71']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

square.addEventListener('mouseover', () => setColor(square))
square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor (el) {
    const color = getRandomColor()
el.style.backgroundColor = color
    el.style.boxShadow =  `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el) {
    el.style.backgroundColor = '#1d1d1d'
    el.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
 const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}
