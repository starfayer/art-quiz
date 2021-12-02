import { homePage, menuPage, quizPage } from './index'

const routes = [
  {path: [ '#', '' ], component: homePage},
  {path: ['#artists', '#pictures'], component: menuPage},
  {path: '#quiz', component: quizPage}
]
export default routes;