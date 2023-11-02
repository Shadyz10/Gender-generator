document.querySelector('#generatorBtn').addEventListener('click', () =>
{
    initPerson = personGenerator.getPerson();
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
    // location.reload();
    initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerHTML = 'Имя';
    document.querySelector('#surnameOutput').innerHTML = 'Фамилия';
    document.querySelector('#genderOutput').innerHTML = 'Пол';
    document.querySelector('#middleName').innerHTML = 'Отчество';
    document.querySelector('#profession').innerHTML = 'профессия';
    document.querySelector('#birthYearOutput').innerHTML = 'год рождения';
    document.querySelector('#birthMonthOutput').innerHTML = 'месяц ';
    document.querySelector('#birthDayOutput').innerHTML = 'день ';
});