function getDay() {
    let date = document.getElementById("day_input").value;
    let month = document.getElementById("month_input").value;
    let year = document.getElementById("year_input").value;
    let century = year.slice(0,1);
    let yearsDigits = year.slice(2, 3);

    if (year === ''|| year.length> 4 || year.lenght< 4){
        alert('Enter a valid year');
    } else if(month === '' || month < 1 || month > 12){
        alert('Enter a valid month');
    } else if (date === '' || date < 0 || date > 31){
        alert('Enter a valid date');
    } else{
        let day = Math.floor (((century/4) - 2* century -1 )+ ((5 * yearsDigits/4)) + ((26*(month+1)/10)) + date) % 7;
        return day
    }
}

function getGender(){
    let option = document.getElementById("gender");
    for(let i = 0; i < option.length; i++){
        if(option[i].checked){
            let gender = option[i].value;
            return gender;
        }
    } 
}

function getName(){
    let male = ['Kwasi', 'Kwadwo' 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    let female = ['Akosua', 'Adowa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    let  day = ['Sunday', 'Monday', 'Teusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    if (getGender() === 'male' && getDay() >= 0){
        document.getElementById('post').innerHTML = ('Hello! If you were Ghanaian born a ') + day[getDay(name)] + (',') + ('Your Akan name would be ') + male[getDay(name)] + ('.')
    } else if (getGender() === 'female' && getDay() >= 0){
        document.getElementById('post').innerHTML = 
    ('Hello! If you were Ghanaian born a ') + day[getDay(name)] + (',') + ('Your Akan name would be ') + female[getDay(name)] + ('.')
    } else {
        alert('Kindly enter valid details then retry');

    }
}
