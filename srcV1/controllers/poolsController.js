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

export default {
    getAllPools: (req, res) => {
        res.send({
            data: pools,
            meta: {},
        });
    },

    getPoolById: (req, res) => {
        res.send("Get an existing workout");
    },

    createNewPool: (req, res) => {
        res.send("Create a new workout");
    },

    updateOnePool: (req, res) => {
        res.send("Update an existing workout");
    },

    deleteOnePool: (req, res) => {
        res.send("Delete an existing workout");
    },
}
