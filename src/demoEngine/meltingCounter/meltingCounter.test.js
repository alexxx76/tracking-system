import meltingCounter from './meltingConter';

describe('main functionality', () => {

  test('get next value', () => {
    expect(meltingCounter.next()).toBe('2225');
    expect(meltingCounter.next()).toBe('2250');
    expect(meltingCounter.next()).toBe('2275');
    expect(meltingCounter.next()).toBe('2300');
  });

});