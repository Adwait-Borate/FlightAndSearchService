const {cityRepository}=require('../repository/index');


// You can instead use functions in place of classes.


class CityService{
    constructor(){
        this.cityRepository= new cityRepository();
    }

    async createCity(data){
        try{
            const city=await this.cityRepository.createCity(data);
            return city;

        }catch(error){
            console.log("Something went wrong at service layer");
            throw{error};
        }
    }


    async deleteCity(cityId){
        try{
            const response=await this.cityRepository.deleteCity(cityId);
            return response;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw{error};
        }

    }


    async updateCity(cityId,data){
        try{
            const city =await this.cityRepository.updateCity(cityId, data);
            return city;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw{error};
        }

    }

    async getCity(cityId){
        try{
           const city=await this.cityRepository.getCity(cityId);
           return city;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw{error};
        }

    }

    async getAllCities(filter){
        //console.log("Filter received serice:", filter);
        try{
          const cities=await this.cityRepository.getAllCities({name:filter.name});
          return cities;
        }catch(error){
            console.log("Something went wrong at service layer");
            throw{error};
        }
    }
    
   
}


    module.exports={CityService}