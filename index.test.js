
const {sequelize} = require('./db');
const {Musician, Band} = require('./index');
//^import the associated models from index.js
describe('Musician Database', () => {
    beforeAll(async() => {
      //reset database
        await sequelize.sync({force:true});
    });

    test('can create a musician', async() => {
        await Musician.create({name: 'Prince', instrument: 'guitar', genre: 'rock/pop', age: 57})
        // const musicians = await Musician.findAll();
        // console.log(musicians);
        const testMusician = await Musician.findOne({
            where: {
              name: 'Prince'
            }
          });
        expect(testMusician.name).toBe('Prince');
        expect(testMusician.instrument).toBe('guitar');
        expect(testMusician.genre).toBe('rock/pop');
    
    });

    test('can create a band', async() => {
      const testBand = await Band.create({name: 'Beatles', genre: 'pop', albums: 21})
      expect(testBand.genre).toBe('pop');
    });

    test('Bands can have many musicians', async() => {
      //create a test instance of Band
      const testBand2 = await Band.create({name: 'Beatles', genre: 'pop', albums: 21});
      //create 2 test instances of Musician
      const testMusician2 = await Musician.create({name: 'John Lennon', instrument: 'guitar', albums: 11, isVocalist: true})
      const testMusician3 = await Musician.create({name: 'Ringo Starr', instrument: 'drums', albums: 20, isVocalist: true})
      //add test Musicians to test Band
      await testBand2.addMusician(testMusician2)
      await testBand2.addMusician(testMusician3)
      //retrieve list of musicians in this band
      const musicianList = await testBand2.getMusicians();
      //assert that the list of musicians is length 2
      expect(musicianList.length).toBe(2);
      //assert that the 0th index of the array musicianList is an instance of the Model Musician
      expect(musicianList[0] instanceof Musician).toBeTruthy();
    })
});