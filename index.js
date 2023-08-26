let signUp = document.getElementById('signup-form');
signUp.addEventListener('submit',(e)=>{
    e.preventDefault();
    const Name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(Name,email,password);
    const array1 = {
        "name":Name,
        "email":email,
        "password":password
    };
       
    const res = fetch('https://fir-ec9e6-default-rtdb.firebaseio.com/login.json',
    {
        method: 'POST',
        body : JSON.stringify(array1),
        headers:{
        'Content-Type':'application/json'
        }
    }
    );
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("password").value ='';
})