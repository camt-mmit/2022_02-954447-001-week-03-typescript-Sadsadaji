function completeTotal(inputsContainer, resultComponent) {
    const inputContainers = [
        ...inputsContainer.querySelectorAll('.cmp-input-container'),
    ];
    const total = inputContainers
        .map((elem) => elem.querySelector('input[type="number"]'))
        .filter((elem) => elem !== null)
        .reduce((carry, elem) => carry + elem.valueAsNumber, 0);
    resultComponent.value = `${total}`;
}
function rebuildIndex(inputsContainer) {
    const inputContainers = [
        ...inputsContainer.querySelectorAll('.cmp-input-container'),
    ];
    inputContainers.forEach((elem, i) => {
        [...elem.querySelectorAll('.cmp-input-no')].forEach((elem) => {
            elem.innerText = `${i + 1}`;
        });
    });
    [
        ...inputsContainer.querySelectorAll('.cmd-remove-input'),
    ].forEach((elem) => {
        elem.disabled = inputContainers.length > 1 ? false : true;
    });
}
function add(inputsContainer, resultComponent, template) {
    const fragment = template.content.cloneNode(true);
    inputsContainer.append(fragment);
    rebuildIndex(inputsContainer);
    completeTotal(inputsContainer, resultComponent);
}
function remove(inputsContainer, resultComponent, inputContainer) {
    inputContainer.remove();
    rebuildIndex(inputsContainer);
    completeTotal(inputsContainer, resultComponent);
}
export function assign(inputSection, inputTemplate) {
    const inputsContainer = inputSection.querySelector('.cmp-inputs-container');
    const resultComponent = inputSection.querySelector('.cmp-result');
    if (inputsContainer === null) {
        throw new Error(`cannot find '.cmp-inputs-container' in DOM tree`);
    }
    if (resultComponent === null) {
        throw new Error(`cannot find '.cmp-result' in DOM tree`);
    }
    inputSection.addEventListener('click', (ev) => {
        if (ev.target) {
            if (ev.target.matches('.cmd-add-input')) {
                add(inputsContainer, resultComponent, inputTemplate);
            }
        }
    });
    inputsContainer.addEventListener('change', (ev) => {
        if (ev.target) {
            if (ev.target.matches('input[type="number"]')) {
                completeTotal(inputsContainer, resultComponent);
            }
        }
    });
    inputsContainer.addEventListener('click', (ev) => {
        if (ev.target) {
            const targetElement = ev.target;
            if (targetElement.matches('.cmd-remove-input')) {
                const inputContainer = targetElement.closest('.cmp-input-container');
                if (inputContainer === null) {
                    throw new Error(`cannot find '.cmp-input-container' in path of DOM tree`);
                }
                remove(inputsContainer, resultComponent, inputContainer);
            }
        }
    });
    add(inputsContainer, resultComponent, inputTemplate);
}
