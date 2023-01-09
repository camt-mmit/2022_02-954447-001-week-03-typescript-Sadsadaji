import { assign as assignInput } from './input2.js';
document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('.cmp-main-container');
    const sectionTemplate = document.querySelector('#tmp-section');
    const inputTemplate = document.querySelector('#tmp-input');
    if (mainContainer === null) {
        throw new Error(`cannot find '.cmp-main-container' in DOM tree`);
    }
    if (sectionTemplate === null) {
        throw new Error(`cannot find '#tmp-section' in DOM tree`);
    }
    if (inputTemplate === null) {
        throw new Error(`cannot find '#tmp-input' in DOM tree`);
    }
    assignInput(mainContainer, sectionTemplate, inputTemplate);
});
