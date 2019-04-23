import nav from './nav';
import { makeButton } from './button';
import { top, bottom } from './footer';
import { makeColor } from './button-styles';

const button = makeButton('yay, button');
document.body.appendChild(button);

// console.log(nav(), top, bottom, makeColor('red'));
