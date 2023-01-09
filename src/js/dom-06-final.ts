import { assign as assignInput } from './input1.js';

document.addEventListener('DOMContentLoaded', () => {
  const inputTemplate =
    document.querySelector<HTMLTemplateElement>('template#tmp-input');
  const inputSection =
    document.querySelector<HTMLElement>('.cmp-input-section');

  if (inputTemplate === null) {
    throw new Error(`cannot find 'template#tmp-input' in DOM tree`);
  }
  if (inputSection === null) {
    throw new Error(`cannot find '.cmp-input-section' in DOM tree`);
  }

  assignInput(inputSection, inputTemplate);
});
