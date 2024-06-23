const City=require('../models/index')   //in index file it will return all the models that you create,so need to import models individually.

class CityRepository {
    async createCity({name}) {
      try {
        const city = await City.create({ name });
        return city;
      } catch (error) {
        console.error('Error creating city:', error);
        throw error;
      }
    }
  
    async deleteCityById(id) {
     try{
         await City.destroy({
            where: {
                id:cityId
            }
         });
     }catch(error){
        throw{error};
     }
    }
  }
  
  module.exports =  CityRepository();