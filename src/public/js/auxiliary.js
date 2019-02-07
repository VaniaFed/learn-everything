const inputGiveAutoFocus = () => {
  const textarea = document.querySelectorAll('textarea');
  const itemBg = document.querySelectorAll('textarea');
  console.log(textarea)
  console.log(itemBg)
  textarea.forEach(key => {
    if (textarea.hasOwnProperty(key)) {
      const element = itemBg[key];
      element.addEventListener('click', () => {
        const textArea = element.childNodes[1];
        textArea.focus();
      });
    }
  });
}

inputGiveAutoFocus();