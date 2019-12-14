/* global require */

// CSS imports
import './main.css';

// JS imports
import './main.js';

// Import all icons from assets/icons
require.context( './icons/', true, /\.svg$/ ).keys().forEach( './icons/', true, /\.svg$/ );
