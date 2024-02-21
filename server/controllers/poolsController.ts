import {PrismaClient} from '@prisma/client'
import { RequestHandler } from 'express';
const prisma = new PrismaClient();

interface iPoolsController {
    getAllPools: RequestHandler,
    getPoolById: RequestHandler,
    createNewPool: RequestHandler,
    updateOnePool: RequestHandler,
    deleteOnePool: RequestHandler,
}


const poolsController: iPoolsController = {
    getAllPools: async (req, res) => {
        try {
            const allPools = await prisma.pool.findMany()
            console.log(allPools)

            res.send({
                data: allPools,
                meta: {},
            });
        } catch (error) {
            res.status(400).send({
                error: {
                    code: '001',
                    message: 'unexpected error',
                },
                data: {},
                meta: {},
            });
        }
    },

    getPoolById: async (req, res) => {
        res.send("Get an existing workout");
    },

    createNewPool: async (req, res) => {
        try {
            const poolData = req.body;

            const allPools = await prisma.pool.create({
                data: {
                    title: poolData.title,
                    authorId: 123
                },
            });
            console.log(allPools)

            res.send({
                data: allPools,
                meta: {},
            });
        } catch (error) {
            res.status(400).send({
                error: {
                    code: '001',
                    message: 'unexpected error',
                },
                data: {},
                meta: {},
            });
        }
    },

    updateOnePool: async (req, res) => {
        res.send("Update an existing workout");
    },

    deleteOnePool: async (req, res) => {
        res.send("Delete an existing workout");
    },
};
export default poolsController;
