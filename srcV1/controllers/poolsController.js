const pools = [
    {
        id: '001',
        title: 'Club del libro CP',
        autor: 'javier',
        wining: 'don quijote',
        maxVotes: 5,
        createdAt: '',
        updatedAt: '',
    },
    {
        id: '002',
        title: 'Pelis para ver',
        autor: 'javier',
        wining: 'titanic',
        maxVotes: 10,
        createdAt: '',
        updatedAt: '',
    },
];

const getAllPools = (req, res) => {
    res.send({
        data: pools,
        meta: {},
    });
};

const getPoolById = (req, res) => {
    res.send("Get an existing workout");
};

const createNewPool = (req, res) => {
    res.send("Create a new workout");
};

const updateOnePool = (req, res) => {
    res.send("Update an existing workout");
};

const deleteOnePool = (req, res) => {
    res.send("Delete an existing workout");
};

module.exports = {
    getAllPools,
    getPoolById,
    createNewPool,
    updateOnePool,
    deleteOnePool,
};