function getDay(name) {
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

