const controller=require('../controllers/index');
const router = require("express").Router();

router.post("/create", controller.create);

router.get("/findAll", controller.findAll);

router.get("/find/:id", controller.findOne);

router.put("/update/:id", controller.update);
  
router.delete("/delete/:id", controller.Delete);


module.exports = {
  router
};
