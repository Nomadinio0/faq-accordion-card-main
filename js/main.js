const questions = document.querySelectorAll('.question')
const box = document.querySelector('.iconDesktop-box')
const container = document.querySelector('.container')

const boxAnimOn = () => {
	box.classList.add('pressed')
	container.classList.add('pressed')
}

const boxAnimOff = () => {
	box.classList.remove('pressed')
	container.classList.remove('pressed')
}

questions.forEach(question => {
	question.addEventListener('click', () => {
		let activeAnswer = document.querySelector('.active')
		question.classList.toggle('active')

		if (activeAnswer) {
			activeAnswer.classList.remove('active')
		}
	})
})

questions.forEach(question => {
	question.addEventListener('mousedown', boxAnimOn)
	question.addEventListener('mouseup', boxAnimOff)
})
