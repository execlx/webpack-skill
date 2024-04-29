import _ from 'lodash';
import './style.css';
import about from './about.md';
function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('big-font');
  element.innerHTML += about;
  // 这是一个测试注释
  return element;
}

document.body.appendChild(component());

