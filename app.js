let tag_form = document.getElementById('form');
let tag_error = document.getElementById('error-message');
let arr_users = [];
console.log(tag_form);

tag_form.addEventListener('submit',function(e){
    e.preventDefault();
    let user = {};
    let names = document.getElementById('names').value;
    let fullnames = document.getElementById('fullnames').value;
    let email = document.getElementById('email').value;
    let birthdate = document.getElementById('birthdate').value;

    console.log(names);
    console.log(fullnames);
    console.log(email);
    console.log(birthdate);

    if(!names){
        tag_error.innerHTML = 'Names are required';
    }else if(!fullnames){
        tag_error.innerHTML = 'Fullnames are required';
    }else if(!email){
        tag_error.innerHTML = 'Email is required';
    }else if(!birthdate){
        tag_error.innerHTML = 'Birthday is required';
    }else{
        remove_error();
        user = {
            names : names,
            fullnames : fullnames,
            email : email,
            birthdate : birthdate
        }
        arr_users.push(user);
        init_table(arr_users);
    }
});

function remove_error(){
    tag_error.innerHTML = '';
}

function init_table(arr){
    let tag_tbody = document.getElementById('tbody');
    tag_tbody.innerHTML = '';
    arr.forEach((element,index) => {
        const row = tag_tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        const cell5 = row.insertCell(4);

        cell1.innerText = element.names;
        cell2.innerText = element.fullnames;
        cell3.innerText = element.email;
        cell4.innerText = element.birthdate;
        cell5.innerHTML = '<button onclick="delete_user('+index+')" class="btn-delete"><ion-icon name="close-outline"></ion-icon></button>'
    });
}

function delete_user(idx){
    console.log(idx);
    arr_users.splice(idx,1);
    init_table(arr_users);
}