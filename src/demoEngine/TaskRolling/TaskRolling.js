class TaskRolling {
  constructor({ steelGrade, melting }) {
    if (!steelGrade || !melting) {
      return {};
    } else {
      const date = new Date();
      const slabWeight = ['5200', '6500', '6800'];
      const slabWidth = ['400', '600', '800'];
      const slabHeight = ['250', '350', '450'];
      const sheetThickness = ['8', '10', '12', '20', '40', '60'];
      const sheetWidth = ['1500', '1800', '2200', '2500'];
      const sheetLength = ['4000', '5600', '6200', '8500', '10200', '12000', '13000'];
      const density = 7850;

      const getRandomInteger = (min, max) => {
        return Math.floor(Math.random() * (max + 1 - min)) + min;
      };

      const getRandomArrayValue = (arr) => {
        return arr[getRandomInteger(0, arr.length - 1)];
      };

      const getMonth = (date) => {
        let month = date.getMonth() + 1;
        if (month < 10) month = `0${month.toString()}`;
        return month;
      };

      const getDayValue = (date) => {
        let day = date.getDate();
        if (day < 10) day = `0${day.toString()}`;
        return day;
      };

      const getItemLength = (weight, density, width, height) => {
        const length = Math.ceil(+weight / +density / +width / +height * 1000000000);
        return length.toString();
      };

      const getSheetParamsOptimal = (weight, density, width, thickness) => {
        const arrParams = sheetLength.map(sheetLength => {
          const rollLength = getItemLength(weight, density, width, thickness);
          const k = Math.floor(rollLength / sheetLength);
          const scrapLength = (rollLength - (sheetLength * k));
          const scrapWeight = Math.ceil(scrapLength * +width *
            +thickness / 1000000000 * +density);
          return { sheetLength, k, scrapWeight };
        }).filter(params => params.k >= 1 && params.k <= 6)
        .sort((first, second) => +first.scrapWeight - +second.scrapWeight);
        const paramsWithMinScrap = arrParams[0];
        return {
          length: paramsWithMinScrap.sheetLength.toString(),
          k: paramsWithMinScrap.k.toString(),
          scrap: paramsWithMinScrap.scrapWeight.toString()
        };
      };

      const getLastSheetNumber = (amount, k) => {
        return (+amount * +k).toString();
      };

      this.steelGrade = steelGrade;
      this.melting = melting;

      this.year = date.getFullYear().toString();
      this.month = getMonth(date);
      this.day = getDayValue(date);

      this.slab = {};
      this.slab.amount = getRandomInteger(4, 20).toString();
      this.slab.weight = getRandomArrayValue(slabWeight);
      this.slab.width = getRandomArrayValue(slabWidth);
      this.slab.height = getRandomArrayValue(slabHeight);
      this.slab.length = getItemLength(
        this.slab.weight,
        density,
        this.slab.width,
        this.slab.height
      );

      this.sheet = {};
      this.sheet.thickness = getRandomArrayValue(sheetThickness);
      this.sheet.width = getRandomArrayValue(sheetWidth);
      const { length, k, scrap } = getSheetParamsOptimal(
        this.slab.weight,
        density,
        this.sheet.width,
        this.sheet.thickness
      );
      this.sheet.length = length;

      this.slab.k = k;
      this.slab.scrap = scrap;

      this.sheet.firstNumber = '1';
      this.sheet.lastNumber = getLastSheetNumber(
        this.slab.amount,
        this.slab.k
      );
    }
  }
}

export { TaskRolling };