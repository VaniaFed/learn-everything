const submit = document.querySelector('#authorization__submit')

submit.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('Pressed')

  const form = document.querySelector('.authorization_form')
  const formData = new FormData(form)
  formData.append('name', 'Ivan')

  console.log(formData)

  const xhr = new XMLHttpRequest()
  xhr.open('POST', '/createUser', true)
  xhr.send(formData)

  xhr.addEventListener('readystatechange', () => {
    if (this.readyState !== 4) return
    console.log(this.responseText)
  })
})
