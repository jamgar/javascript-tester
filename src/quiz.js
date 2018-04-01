import { questions } from './api/questions'
import * as views from './views'

class Quiz {
  constructor() {
    this.name = ''
    this.currentId = 0
  }

  startQuiz = () => {
    // Set Name of Quiz taker
    this.name = document.getElementById('name').value

    this.getQuestion()
    // Show first question
    document.getElementById('view').innerHTML = views.Question()
    const nextBtn = document.getElementById('next-button')
    nextBtn.addEventListener('click', quiz.nextQuestion)
  }

  getQuestion = (id) => {
    this.currentId = id || this.currentId
    return questions[this.currentId]
  }

  nextQuestion = () => {
    this.currentId += 1
    
    const question = this.getQuestion(this.currentId)
    return question
  }
}

export const quiz = new Quiz()
