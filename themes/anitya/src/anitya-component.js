import Appearance from './components/Appearance';
import Caniuse from './components/Caniuse';
import Archives from './components/Archives';

Vue.config.productionTip = false;

new Vue({
  el: '#main',
  components: {
    'c-appearance': Appearance,
    'c-archives': Archives,
    'c-caniuse': Caniuse
  }
});
