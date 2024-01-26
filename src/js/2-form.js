const form = document.querySelector('.feedback-form');



const saveToLocalStorage = () => {
    const email = form.elements.email.value.trim();

const message = form.elements.message.value.trim();

const feedbackForm = {
  email: email,
  message: message,
};
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
};

const returnedForm = localStorage.getItem('feedback-form-state');
if (returnedForm) {
  const parsedForm = JSON.parse(returnedForm);
  form.elements.email.value = parsedForm.email;
  form.elements.message.value = parsedForm.message;
}

const handleSubmit = event => {
    const email = form.elements.email.value.trim();

const message = form.elements.message.value.trim();

const feedbackForm = {
  email: email,
  message: message,}
  event.preventDefault();
if (feedbackForm.email!=="" && feedbackForm.message!==""){
console.log(feedbackForm);
localStorage.removeItem('feedback-form-state');
form.reset();
}

};

form.addEventListener('input', saveToLocalStorage);
form.addEventListener('submit', handleSubmit);
