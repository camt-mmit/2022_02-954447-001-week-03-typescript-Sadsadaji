document.addEventListener('DOMContentLoaded', () => {
  const inputs = [
    ...document.querySelectorAll<HTMLInputElement>(
      '.cmp-inputs-container input[type="number"]',
    ),
  ];

  inputs.forEach((element) => {
    element.addEventListener('change', () => {
      const total = inputs.reduce((carry, em) => carry + em.valueAsNumber, 0);

      const outputComponent =
        document.querySelector<HTMLOutputElement>('output.cmp-result');

      if (outputComponent === null) {
        throw new Error("connot find 'output.cmp-result' in DOM tree");
      }

      outputComponent.value = `${total}`;
    });
  });
});
