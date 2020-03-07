import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartInfo from '../parts/PartsInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotBases from '../parts/RobotBases.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import SidebarBuild from '../sidebars/SidebarBuild.vue';
import SidebarStandard from '../sidebars/SidebarStandard.vue';
import ShoppingCart from '../cart/shoppinCart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard,
    },
  }, {
    path: '/build',
    name: 'robotBuilder',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
  },
  {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'RobotArms',
        path: 'arms',
        component: RobotArms,
      },
      {
        name: 'RobotHeads',
        path: 'heads',
        component: RobotHeads,
      },
      {
        name: 'RobotBases',
        path: 'bases',
        component: RobotBases,
      },
      {
        name: 'RobotTorsos',
        path: 'torsos',
        component: RobotTorsos,
      },
    ],
  },
  {
    path: '/partInfo/:partType/:id',
    name: 'PartInfo',
    component: PartInfo,
    props: true,
  }, {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  }],
});
