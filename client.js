

const myform = document.getElementById('myform');

myform.addEventListener('submit', function(e){
    e.preventDefault();

    const formData = new FormData(this)

    fetch('http://localhost:3000/users/login', {
        method: 'post',
        
        body: formData,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Request-Headers': '*',

        }
    }).then(function (response){
        return response.text()
    }).then(function (text){
        console.log(text)
    })
})