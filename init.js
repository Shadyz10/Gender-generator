document.querySelector('#generatorBtn').addEventListener('click', () =>
{
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerHTML = initPerson.firstName;
    document.querySelector('#surnameOutput').innerHTML = initPerson.surname;
    document.querySelector('#genderOutput').innerHTML = initPerson.gender;
    document.querySelector('#middleName').innerHTML = initPerson.middleName;
    document.querySelector('#profession').innerHTML = initPerson.randomProf;
    document.querySelector('#birthYearOutput').innerHTML = initPerson.birthYear;
    document.querySelector('#birthMonthOutput').innerHTML = initPerson.birthMonth;
    document.querySelector('#birthDayOutput').innerHTML = initPerson.birthDay;
});

document.querySelector('#clearBtn').addEventListener('click', () => {
    location.reload();
});

