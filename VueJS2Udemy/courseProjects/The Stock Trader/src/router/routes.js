import Portfolio from '../components/Portfolio'
import Stocks from '../components/Stocks'
import Home from '../components/Home'

export const routes = [
  {path: '/', component: Home}, 
  {path: '/portfolio', component: Portfolio}, 
  {path: '/stocks', component: Stocks},
  {path: '*', redirect: '/'}
]