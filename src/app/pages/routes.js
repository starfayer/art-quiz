import { homePage } from './index'
import { quizPage } from './Quiz'

let routes = [
  {path: [ '#', '' ], component: homePage},
  {path: ['#artists', '#pictures'], component: quizPage}
]
export default routes;