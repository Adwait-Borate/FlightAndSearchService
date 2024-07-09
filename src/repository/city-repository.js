const { City } = require('../models/index');   //in index file it will return all the models that you create,so need to import models individually.
const { Op } = require("sequelize");


class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.error('Error creating city:', error);
      throw error;
    }
  }

  async deleteCityById(cityId) {
    try {
      const result = await City.destroy({
        where: { id: cityId }
      });
      if (result === 0) {
        throw new Error('City not found');
      }
      return true;
    } catch (error) {
      console.error('Error deleting city:', error);
      throw error;
    }
  }
  

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);  
      return city;  // Return the result of the findByPk operation
    } catch (error) {
      console.error('Something went wrong in the repository layer:', error);
      throw error;
    }
  }


  async updateCity(cityId, data) {
    try {
      const city = await City.update(data, {
        where: {
             id: cityId }  // Correctly specifying the condition in the where clause
      });
      return city;    // [numberOfAffectedRows]
    } catch (error) {
      console.error('Something went wrong in the repository layer:', error);
      throw error;
    }
  }

//   async getAllCities(filter){
//     try{
//       if(filter.name){
//         const cities=await City.findAll({
//           where:{
//             [Op.startsWith]: filter.name
//           }
//         });
//         return cities;
//       }
//      const cities=await City.findAll();
//      return cities;
//     }catch(error){
//         console.log("Something went wrong at service layer");
//         throw{error};
//     }
// }



async getAllCities(filter) {
  //console.log("Filter received:", filter);
    try {
        let cities;
        if (filter && filter.name) {
            cities = await City.findAll({
                where: {
                    name: {
                        [Op.startsWith]: filter.name
                    }
                }
            });
        } else {
            cities = await City.findAll();
        }
        return cities;
    } catch (error) {
        console.log("Something went wrong at service layer");
        throw { error };
    }
}

}



  

module.exports =  CityRepository;  // Correctly export an instance of CityRepository
