const personGenerator = {
	surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

	firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

	firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Елена",
            "id_3": "Маргарита",
            "id_4": "Кристина",
            "id_5": "Елизавета",
            "id_6": "Алена",
            "id_7": "Мария",
            "id_8": "Даша",
            "id_9": "Ксения",
            "id_10": "Наталья"
        }   
    }`,

	monthBirthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }   
    }`,

	professionMale: `{
        "count": 5,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Прораб",
            "id_3": "Плиточник",
            "id_4": "Водитель",
            "id_5": "Барбер"
        }   
    }`,

	professionFemale: `{
        "count": 5,
        "list": {     
            "id_1": "Медсестра",
            "id_2": "Визажистка",
            "id_3": "Учительница",
            "id_4": "Вожатая",
            "id_5": "Модель"
        }   
    }`,

	GENDER_MALE: 'Мужчина',
	GENDER_FEMALE: 'Женщина',

	randomIntNumber: (max = 1, min = 0) =>
		Math.floor(Math.random() * (max - min + 1) + min),

	randomValue: function (json) {
		const obj = JSON.parse(json)
		const prop = `id_${this.randomIntNumber(obj.count, 1)}`
		return obj.list[prop]
	},

	// Генерация пола

	randomGender: function () {
		randGender = this.randomIntNumber(1, 0)
		switch (randGender) {
			case 0:
				return this.GENDER_FEMALE
			default:
				return this.GENDER_MALE
		}
	},

	// Генерация Имени

	randomFirstName: function () {
		switch (randGender) {
			case 0:
				return this.randomValue(this.firstNameFemaleJson)
			default:
				return this.randomValue(this.firstNameMaleJson)
		}
	},

	// Генерация фамилии

	randomSurname: function () {
		switch (randGender) {
			case 0:
				return this.randomValue(this.surnameJson) + 'а'
			default:
				return this.randomValue(this.surnameJson)
		}
	},

	// Генерация отчества

	randomMiddleName: function () {
		randomName = this.randomValue(this.firstNameMaleJson)
		// console.log(randomName)
		if (randGender == 1) {
				if (randomName == 'Михаил') {
					return randomName.replace('ил', 'йлович')
				} else if (randomName == 'Дмитрий') {
					return randomName.replace('й', 'евич')
				} else if (randomName == 'Андрей') {
					return randomName.replace('й', 'евич')
				} else if (randomName == 'Никита') {
					return randomName.replace('а', 'ич')
				} else {
					return randomName + 'ович'
			}
			
		} else {
			if (randomName == 'Михаил') {
					return randomName.replace('ил', 'йловна')
				} else if (randomName == 'Дмитрий') {
					return randomName.replace('й', 'евна')
				} else if (randomName == 'Андрей') {
					return randomName.replace('й', 'евна')
				} else if (randomName == 'Никита') {
					return randomName.replace('а', 'ична')
				} else {
					return randomName + 'овна'
			}
		}   
	},

	// Генерация профессии

	randomProfession: function () {
		switch (randGender) {
			case 0:
				return this.randomValue(this.professionFemale)
			default:
				return this.randomValue(this.professionMale)
		}
	},

	// Генерация года рождения

	randomBirthYear: function () {
		return this.randomIntNumber(1965, 2000) + ' года рождения'
	},

	// Генерация месяца рождения

	randomBirthMonth: function () {
		randomMonth = this.randomValue(this.monthBirthJson) + ' '
		return randomMonth
	},

	// Генерация дня рождения

	randomBirthDay: function () {
		randomDay = this.randomIntNumber(12, 1)
		if (randomDay == 2) {
			return this.randomIntNumber(28, 1) + ' '
		} else if (randomDay % 2 == 0) {
			return this.randomIntNumber(30, 1) + ' '
		} else {
			return this.randomIntNumber(31, 1) + ' '
		}
	},

	getPerson: function () {
		this.person = {}
		this.person.gender = this.randomGender()
		this.person.firstName = this.randomFirstName()
		this.person.surname = this.randomSurname()
		this.person.middleName = this.randomMiddleName()
		this.person.randomProf = this.randomProfession()
		this.person.birthYear = this.randomBirthYear()
		this.person.birthMonth = this.randomBirthMonth()
		this.person.birthDay = this.randomBirthDay()
		return this.person
	},
}