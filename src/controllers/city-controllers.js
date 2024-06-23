const {CityService} = require('../services/index');

/*
EXPLAINATION PURPOSE

const logStuff = [logOriginalUrl, logMethod]
app.get('/user/:id', logStuff, (req, res, next) => {
  res.send('User Info')
})

In this code it has an api endpoint, middleware, and the last function (req,res,next).Now this last function is actually the controller.So that will be in controllers folder. middleware will be segregated in one folder and all the api endpoint(routes) in one folder.
*/

//We wont be creating class instead use functions

/*
 -POST
 -data -> req.body
*/


const cityService=new CityService();


const create = async (req, res) => {
    try {
      const city = await cityService.createCity(req.body); 
      return res.status(201).json({
        data: city,
        success: true,
        message: "Successfully created a city",
        err: {}
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        message: "Failed to create a city",
        err: error.message
      });
    }
  };
  
  
//DELETE -> /city/:id
const destroy = async (req, res) => {
    try {
      const city = await cityService.deleteCity(req.params.id);
      return res.status(200).json({
        data: city,
        success: true,
        message: "Successfully deleted a city",
        err: {}
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        data: {},
        success: false,
        message: "Failed to delete a city",
        err: error.message
      });
    }
  };
  




//GET-> /city/:id
const get=async (req,res)=>{
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
          data: city,
          success: true,
          message: "Successfully fetched a city",
          err: {}
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          data: {},
          success: false,
          message: "Failed to fetch a city",
          err: error.message
        });
      }
}




//PATCH -> /city/:id -> req.body
const update=async (req,res)=>{
    try {
        const city = await cityService.getCity(req.params.id, req.body);
        return res.status(200).json({
          data: city,
          success: true,
          message: "Successfully updated city",
          err: {}
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          data: {},
          success: false,
          message: "Failed to update a city",
          err: error.message
        });
      }
}


module.exports={
    create,
    destroy,
    get,
    update
}