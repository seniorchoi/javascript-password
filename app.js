// valUI
    document.getElementById('password-form').addEventListener('submit',function(e){


                    e.preventDefault();
            processPassword();
           // document.getElementById('wrong').style.display = 'none';

                });

    function processPassword(){

                const password = document.getElementById('password').value;

                if(password === 'divistockrocks123'){
                    window.location.replace("https://docs.google.com/spreadsheets/d/13gwmuqz_wrstfa06atUUTLsSMvNOjsootV08laHYhho/edit?usp=sharing");

                    } else {
                    //
                        document.getElementById('wrong').style.display = 'block';
                    document.querySelector('.alert alert-danger col-md-4').innerText = "wrong password";


                        }


                }