import { Routes } from '@angular/router';
import { Intro } from './intro/intro';
import { Menu } from './menu/menu';

export const routes: Routes = [
  {
    path: '',
    component: Intro
  },
  {
    path: 'menu',
    component: Menu
  }
];
