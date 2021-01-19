function validateUsername(username) {
    if(username.length > 14 || username.length === 0) {
        return false;
    }
    return true;
}

function validateAge(age) {
    if(isNaN(age)) {
        return false;
    }
    let numberAge = Number(age);
    if(numberAge > 0 && numberAge <= 120) {
        return true;
    }
    return false;
}

function validateEmail(email) {
    let re = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
    return re.test(email);
}

export {validateAge, validateUsername, validateEmail};