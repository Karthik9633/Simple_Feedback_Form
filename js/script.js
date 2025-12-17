const form = document.getElementById("feedbackForm")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const ratingInput = document.getElementById("rating")
const messageInput = document.getElementById("message")
const result = document.getElementById("result")

let nameError = document.getElementById("nameError")
let emailError = document.getElementById("emailError")
let ratingError = document.getElementById("ratingError")
let messageError = document.getElementById("messageError")

form.addEventListener("submit", (ev) => {
    let isValid = true
    function clearError(){
        document.querySelectorAll(".error").forEach((errElement)=>{
            errElement.innerHTML=""
        })
        document.querySelectorAll(".invalid").forEach((errInput)=>{
            errInput.classList.remove("invalid")
        })
    }
    clearError()


    function showErr(input,errElement,message){
        errElement.innerHTML=message
        input.classList.add("invalid")

        if(nameInput.ariaValueMax.trim().length<3){
            isValid= false
            showErr(nameInput,nameError,"Name must be atleast 3 character")
        }
        if(!emailInput.ariaValueMax.includes("@")){
            showErr(emailInput,emailError,"Enter a Valid Email ID")
            isValid=false
        }
        if(ratingInput.value===""){
            showErr(ratingInput,ratingError,"Please Select any rating")
             isValid=false
        }
        if(messageInput.value.trim().length<10){
            showErr(messageInput,messageError,"message must be atleast 10 characters")
        }
    }
    if(isValid) return

    result.innerHTML=`
    <div class="feedback">
    
    `
})