const steelGradeRegistry = {
  set: new Set([
    '09Г2С',
    '17ГС',
    '17Г1С-У',
    '08ГБЮ',
    '12ГСБ',
    '09ГСФ',
    '13ХФА',
    '08ГБФ',
    '09Г2СД',
    '15ХСНД',
    '10ХСНД',
    '12Г2СБД',
    '15ХСНДА',
    '10ХСНДА',
    '09Г2Д',
    '10ХНДП',
    '15ГФД'
  ]),

  getAll() {
    return [...this.set];
  },

  has(steelGrade) {
    return this.set.has(steelGrade);
  },

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
  },

  getRandom() {
    const allSteelGrades = this.getAll();
    const randomIndex = this.getRndInteger(0, allSteelGrades.length - 1);
    return allSteelGrades[randomIndex];
  },

  try(steelGrade) {
    if (this.has(steelGrade)) {
      return this.getAll().filter(item => item === steelGrade)[0];
    } else {
      return this.getRandom();
    }
  }
};

export default {
  getAll: steelGradeRegistry.getAll.bind(steelGradeRegistry),
  getRandom: steelGradeRegistry.getRandom.bind(steelGradeRegistry),
  try: steelGradeRegistry.try.bind(steelGradeRegistry),
};