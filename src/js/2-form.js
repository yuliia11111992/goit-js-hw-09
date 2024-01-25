
const form=document.querySelector(".feedback-form");
const setToLocalServer=()=>{
   
const email=form.elements.email.value;
const message=form.elements.message.value;
const feedbackForm={
    email:email,
    message:message
}  
localStorage.setItem("feedback-form-state",JSON.stringify(feedbackForm));

    }

const returnedForm=localStorage.getItem("feedback-form-state");
if(returnedForm){
  const parsedForm=JSON.parse(returnedForm);
  form.elements.email.value=parsedForm.email;
  form.elements.message.value=parsedForm.message;
}

const handleSubmit=(event)=>{
 event.preventDefault();
 console.log({
    email:form.elements.email.value,
    message:form.elements.message.value
}  );
 localStorage.removeItem("feedback-form-state");
 form.reset();  
}





form.addEventListener("input",setToLocalServer);
form.addEventListener("submit",handleSubmit);
