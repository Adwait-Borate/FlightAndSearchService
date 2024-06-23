const { City } = require('../models/index');   //in index file it will return all the models that you create,so need to import models individually.

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
      await City.destroy({
        where: {
          id: cityId
        }
      });
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
      return city;
    } catch (error) {
      console.error('Something went wrong in the repository layer:', error);
      throw error;
    }
  }

}



  

module.exports =  CityRepository();  // Correctly export an instance of CityRepository
