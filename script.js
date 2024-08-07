//console. log( 'Hello World!')
//var prompt = prompt 'What is your name?')
//console.log(prompt)



function verifyAge(age){
  var age = prompt('What is your age?');
  console.log(age)

  if(age <18) {
    alert('you are a minor')
  } else if (age >= 18 && age <= 60) {
    alert('you are an adult')
  } else {
    alert('you are a senior citizen!')
  }
}


function uploadAndIdentifyPlant() {
  //get the photo from the frontend
  var photoInput = document.getElementById('photoInput');
  console.log(photoInput)
console.log(photoInput.files[0])
 // if no photo was selected and the user clicks submit let the user know they need to upload a photo first.
  if(photoInput.files.length=== 0) {
    alert ('please selecta photo to upload');
    return;
  }
  //select the first files folder/array from the upload button.
  var selectedFile = photoInput.files[0];
}
