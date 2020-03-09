let vid2 = document.querySelector('.vid2')
let fist = document.querySelector('.fist')

let letter_b = document.querySelector('.letter_b')
let letter_a = document.querySelector('.letter_a')
let letter_b_2 = document.querySelector('.letter_b_2')
let letter_y = document.querySelector('.letter_y')

let shark = document.querySelector('.shark')

let kim = document.querySelector('.kim')
let momo_buzzfeed = document.querySelector('.momo_buzzfeed')
let momo_guardian = document.querySelector('.momo_guardian')
let momo_first_suicide = document.querySelector('.momo_first_suicide')
let momo_instagram = document.querySelector('.momo_instagram')
let momo_cbs = document.querySelector('.momo_cbs')
let momo_cnn = document.querySelector('.momo_cnn')
let momo_atlantic = document.querySelector('.momo_atlantic')


function moveVid2 () {
	vid2.style.bottom = '100px'
}

function moveFist () {
	fist.style.left = '50px'
}

function moveLetter_b () {
	letter_b.style.top = '-220px'
	letter_b.style.left = '0px'
	letter_b.style.transform = 'rotate(45deg)'
	letter_b.style.transform = 'scale(0.3,0.3)'
}

function moveLetter_a () {
	letter_a.style.top = '-220px'
	letter_a.style.left = '200px'
	letter_a.style.transform = 'scale(0.3,0.3)'
}

function moveLetter_b_2 () {
	letter_b_2.style.top = '-220px'
	letter_b_2.style.left = '-150px'
	letter_b_2.style.transform = 'scale(0.3,0.3)'
}

function moveLetter_y () {
	letter_y.style.top = '-220px'
	letter_y.style.left = '600px'
	letter_y.style.transform = 'scale(0.3,0.3)'
}

function moveShark () {
	shark.style.top = '0px'
	shark.style.left = '1100px'
	shark.style.transform = 'rotate(45deg)'
}

function moveKim () {
	kim.style.opacity = '0'
}

function moveMomo_buzzfeed () {
	momo_buzzfeed.style.opacity = '0'
}

function moveMomo_guardian () {
	momo_guardian.style.opacity = '0'
}

function moveMomo_first_suicide () {
	momo_first_suicide.style.opacity = '0'
}


function moveMomo_instagram () {
	momo_instagram.style.transform = 'scale(2,2)'
}

function moveMomo_cbs () {
	momo_cbs.style.opacity = '0'
}

function moveMomo_cnn () {
	momo_cnn.style.opacity = '0'
}

function moveMomo_atlantic () {
	momo_atlantic.style.opacity = '0'
}


vid2.addEventListener('click', moveVid2)
fist.addEventListener('click', moveFist)
letter_b.addEventListener('click', moveLetter_b)
letter_a.addEventListener('click', moveLetter_a)
letter_b_2.addEventListener('click', moveLetter_b_2)
letter_y.addEventListener('click', moveLetter_y)
shark.addEventListener('click', moveShark)

kim.addEventListener('click', moveKim)
momo_buzzfeed.addEventListener('click', moveMomo_buzzfeed)
momo_guardian.addEventListener('click', moveMomo_guardian)
momo_first_suicide.addEventListener('click', moveMomo_first_suicide)
momo_instagram.addEventListener('click', moveMomo_instagram)
momo_cbs.addEventListener('click', moveMomo_cbs)
momo_cnn.addEventListener('click', moveMomo_cnn)
momo_atlantic.addEventListener('click', moveMomo_atlantic)
