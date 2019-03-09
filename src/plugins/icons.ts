import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart);

Vue.component('font-awesome-icon', FontAwesomeIcon);
