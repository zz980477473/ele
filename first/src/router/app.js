import Home from '@/components/Home';
import Kind from '@/components/Kind';
import User from '@/components/User/index';
import Cart from '@/components/Cart';
import Login from '@/components/User/login';
import hot from '@/components/hot/index';
import Search from '@/components/Search';
import Shop from '@/components/Shop';

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/kind',
    component: Kind
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/hot',
    component: hot
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/shop',
    component: Shop
  }
];

export default routes;
