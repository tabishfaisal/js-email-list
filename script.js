function generateEmail(){

    const emailList = document.getElementById("emailList");
    let emailitems = "";


    function fetchEmail(){
        return fetch('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(res => res.json())
        .then(data => {
            const email = data.response;
            emailitems += `<li>${email}</li>`;
            emailList.innerHTML=emailitems; 
        })
        .catch(error => {
            console.error('Errore', error);
        });
    }

    for (let i= 0; i<10; i++){
        fetchEmail();
    }
}

generateEmail();