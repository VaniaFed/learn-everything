const inputGiveAutoFocus = () => {
  const itemBg = document.getElementsByClassName('answer');
  itemBg.forEach(key => {
    if (itemBg.hasOwnProperty(key)) {
      const element = itemBg[key];
      element.addEventListener('click', () => {
        const textArea = element.childNodes[1];
        textArea.focus();
      });
    }
  });
}

inputGiveAutoFocus();