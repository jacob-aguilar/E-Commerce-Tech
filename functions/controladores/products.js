const admin = require('firebase-admin');
const db = admin.firestore();

// CRUD COMPUTERS

const createComputers = async (req, res) => {

    try {
        await db.collection('computers')
            .doc()
            .create({
                calification: req.body.calification,
                category: req.body.category,
                create: new Date().getTime(),
                features: req.body.features,
                id: req.body.id,
                img: req.body.img,
                longdescription: req.body.longdescription,
                name: req.body.name,
                description: req.body.description,
                shortdescription: req.body.shortdescription,
                words: req.body.words,
            });

        return res.status(200).json({
            mgs: 'Computadora creada'
        });

    } catch (error) {
        return res.status(400).send(error);
    }
}


const getComputers = async (req, res) => {

    try {
        const query = await db.collection(`computers`).orderBy('name', 'desc').get();

        const docs = query.docs;

        const result = docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json({
            data: result
        });

    } catch (error) {
        return res.status(400).send(error);
    }
}


const updateComputers = async (req, res) => {

    try {
        const producto = db.collection(`computers`).doc(req.params.id);
        console.log(producto);
        await producto.update({
            name: req.body.name,
            description: req.body.description
        });

        return res.status(200).json({
            msg: 'Computadora actualizada'
        });

    } catch (error) {
        return res.status(400).send(error);
    }
}


const deleteComputers = async (req, res) => {

    try {
        const producto = db.collection(`computers`).doc(req.params.id);
        
        await producto.delete();

        return res.status(200).json({
            msg: 'Computadora eliminada'
        });

    } catch (error) {
        return res.status(400).send(error);
    }
}


// CRUD PHONES

const createPhones = async (req, res) => {

    try {
        await db.collection('phones')
            .doc()
            .create({
                calification: req.body.calification,
                category: req.body.category,
                create: new Date().getTime(),
                features: req.body.features,
                id: req.body.id,
                img: req.body.img,
                longdescription: req.body.longdescription,
                name: req.body.name,
                description: req.body.description,
                shortdescription: req.body.shortdescription,
                words: req.body.words,
            });

        return res.status(200).json({
            mgs: 'Celular creado'
        });

    } catch (error) {
        return res.status(400).send(error);
    }
}

const getPhones = async (req, res) => {

    try {
        const query = await db.collection(`computers`).orderBy('name', 'desc').get();

        const docs = query.docs;

        const result = docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return res.status(200).json({
            data: result
        });

    } catch (error) {
        return res.status(400).send(error);
    }
}


const updatePhones = async (req, res) => {

    try {
        const producto = db.collection(`computers`).doc(req.params.id);
        console.log(producto);
        await producto.update({
            name: req.body.name,
            description: req.body.description
        });

        return res.status(200).json({
            msg: 'Computadora actualizada'
        });

    } catch (error) {
        return res.status(400).send(error);
    }
}


const deletePhones = async (req, res) => {

    try {
        const producto = db.collection(`computers`).doc(req.params.id);
        
        await producto.delete();

        return res.status(200).json({
            msg: 'Computadora eliminada'
        });

    } catch (error) {
        return res.status(400).send(error);
    }
}

module.exports = {
    createComputers,
    getComputers,
    updateComputers,
    deleteComputers,
    createPhones,
    getPhones,
    updatePhones,
    deletePhones
}