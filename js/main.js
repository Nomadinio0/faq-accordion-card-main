const questions = document.querySelectorAll('.question')

questions.forEach(question => {
	question.addEventListener('click', () => {
		let activeAnswer = document.querySelector('.active')
		if (activeAnswer) {
			activeAnswer.classList.remove('active')
		}
		console.log(activeAnswer)
		question.classList.toggle('active')
	})
})
