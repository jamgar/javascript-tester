require('./css/normalize.css')
require('./css/style.css')

import * as views from './views'
import { quiz } from './quiz'

const init = () => {
  document.getElementById('root').innerHTML = views.Header()
  document.getElementById('view').innerHTML = views.Welcome()

  const startBtn = document.getElementById('start-button')
  startBtn.addEventListener('click', quiz.startQuiz)
}

document.addEventListener('DOMContentLoaded', init)
