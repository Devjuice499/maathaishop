function login(){
    email =document.getElementById('email').value
    password=document.getElementById('password').value
    if(validate_email(email)==false || validate_password(password)==false){
      alert ("Email or password is invalid")
      return
    }
    auth.signInWithEmailAndPassword(email,password)
    .then(function(){
      var user =auth.currentUser
  
      var database_ref =database.ref()
       
      var user_data ={
       
        last_login : Date.now()
      
      }
      database_ref.child('users/' +user.uid).update(user_data)
      
      window.location.replace("./index.html");
  
  
    })
    .catch(function(error){
      var error_code =error.code
      var error_message = error.message
      alert (error_message)
        })
  }
  function validate_email(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email)==true){
      return true
    } else {
        alert('Invalid email')
      return false
    }
  }
  
  function validate_password(password){
    if(password< 6){
        alert('Password should be 6 characters or higher')
      return false
    } else {
      return true
    }
  }
  
  function validate_field (field){
  if (field==null){
    return false
  } if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }  