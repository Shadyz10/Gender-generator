
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerHTML = initPerson.surname;
    document.querySelector('#genderOutput').innerHTML = initPerson.gender;
    document.querySelector('#middleName').innerHTML = initPerson.middleName;
    document.querySelector('#birthYearOutput').innerHTML = initPerson.birthYear;
    document.querySelector('#birthMonthOutput').innerHTML = initPerson.birthMonth;
    document.querySelector('#birthDayOutput').innerHTML = initPerson.birthDay;
};

