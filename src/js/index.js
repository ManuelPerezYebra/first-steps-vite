import { addCounter, decreaseCounter } from './counter-functions';
import { buttonCounterDecreaseElement, buttonCounterElement } from './dom';

buttonCounterElement.addEventListener('click', addCounter);
buttonCounterDecreaseElement.addEventListener('click', decreaseCounter);
