import Portfolio from '../components/Portfolio'
import Stocks from '../components/Stocks'

export const routes = [
  {path: '/', component: Portfolio}, 
  {path: '/stocks', component: Stocks},
  { path: '*', redirect: '/'}
]