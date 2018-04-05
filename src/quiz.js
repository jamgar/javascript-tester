import { questions } from './api/questions'
import * as views from './views'

class Quiz {
  constructor() {
    this.name = ''
    this.currentId = 0
    this.score = 0
    this.questionCount = questions.length
  }

  startQuiz = () => {
    // Set Name of Quiz taker
    this.name = document.getElementById('name').value

    // Show first question
    this.showQuestion(this.currentId)
  }

  showQuestion = (id) => {
    document.getElementById('view').innerHTML = views.Question(this.getQuestion(id))
    const nextBtn = document.getElementById('next-button')
    nextBtn.addEventListener('click', quiz.nextQuestion)
  }

  getQuestion = (id) => {
    // Update currentId with parameter or the state currentId
    this.currentId = id || this.currentId
    return questions[this.currentId]
  }

  checkAnswer = () => {
    // Get the selected answer
    const answer = document.querySelector('input[name="answers"]:checked').value
    const question = this.getQuestion(this.currentId)
    // Check the selected 'answer' is correct
    if (question.options[answer-1].isCorrect) {
      // Store selected answer
      this.score++
    }
  }

  nextQuestion = (event) => {
    event.preventDefault()
    this.checkAnswer()
    // Increment currentId to get the next question
    this.currentId += 1

    if (this.currentId < this.questionCount) {
      this.showQuestion(this.currentId)
    } else {
      document.getElementById('view').innerHTML = `You have ${this.score} correct!`
      // // TODO: Quit or Play again button
    }
  }

}

export const quiz = new Quiz()
