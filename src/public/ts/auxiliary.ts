const inputGiveAutoFocus = () => {
  const itemBg = document.getElementsByClassName('answer');
  for (const key in itemBg) {
    if (itemBg.hasOwnProperty(key)) {
      const element = itemBg[key];
      element.addEventListener('click', () => {
        const textArea = <HTMLElement>element.childNodes[1];
        textArea.focus();
      });
    }
  }
}

inputGiveAutoFocus();