import './app.css';
import 'bootstrap/dist/css/bootstrap.css';

import 'jquery';
import 'bootstrap/dist/js/bootstrap.js';
import angular from 'angular';
import 'angular-i18n/angular-locale_fr-fr';
import 'angular-sanitize';
import 'angular-ui-bootstrap';
import 'angular-toastr';
import './core/core.module';
import './sections/sections.module';

angular.module('templateApp', ['templateApp.core', 'templateApp.sections', 'ui.bootstrap', 'ngSanitize']);
