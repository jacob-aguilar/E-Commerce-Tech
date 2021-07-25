const {Router} = require ("express");
const { getComputers, updateComputers, deleteComputers, createComputers, createPhones, getPhones, updatePhones, deletePhones } = require("../controladores/products");
const router = Router();

router.post('/createComputers', createComputers);
router.get('/getComputers', getComputers);
router.put('/updateComputers/:id', updateComputers);
router.delete('/deleteComputers/:id', deleteComputers);

router.post('/createPhones', createPhones);
router.get('/getPhones', getPhones);
router.put('/updatePhones/:id', updatePhones);
router.delete('/deletePhones/:id', deletePhones);


module.exports = router;

