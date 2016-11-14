import './app.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'jquery';
import 'bootstrap/dist/js/bootstrap.js';
import angular from 'angular';

import coreModule from './core/core.module';
import sectionModule from './sections/sections.module';

angular.module('templateApp', [coreModule, sectionModule]);
