import steelGradeRegistry from './steelGradeRegistry';

const allValues = [
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
];

describe('main functionality', () => {

  test('get all values', () => {
    expect(steelGradeRegistry.getAll()).toStrictEqual(allValues);
  });

  test('selecting random value', () => {
    const randomValue = steelGradeRegistry.getRandom();
    const index = allValues.indexOf(randomValue);
    const existingValue = allValues[index];

    expect(randomValue).toBe(existingValue);
  });

  test('selecting an existing value', () => {
    expect(steelGradeRegistry.try('09Г2С')).toBe('09Г2С');
    expect(steelGradeRegistry.try('10ХСНДА')).toBe('10ХСНДА');
    expect(steelGradeRegistry.try('15ГФД')).toBe('15ГФД');
  });


  test('random selection when no value is found', () => {
    const missingValues = ['09-Г-2С', '10_ХСНДА', '15:ГФД'];
    for (let value of missingValues) {
      const receivedValue = steelGradeRegistry.try(value);
      const index = allValues.indexOf(receivedValue);
      const existingValue = allValues[index];

      expect(receivedValue).toBe(existingValue);
    }
  });
});