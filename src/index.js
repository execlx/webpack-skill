import _ from 'lodash';
import './style.css';
import about from './about.md';
function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('big-font');
  element.innerHTML += about;
  return element;
}

document.body.appendChild(component());

