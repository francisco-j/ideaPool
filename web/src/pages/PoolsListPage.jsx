import React, { useEffect, useState } from "react";
import Page from "./Page";
import styl from "./PoolsListPage.module.scss";
import PoolCard from "../components/PoolCard";
import poolsService from "../services/poolsService";

export default () => {
    const [pools, setPools] = useState();

    useEffect(() => {
        async function fetchMyAPI() {
            const response = await poolsService.getAll();
            console.log(response);
            setPools(response.data);
        }

        fetchMyAPI();
    }, []);

    return (
        <Page
            className={styl.Page}
            title='My pools'
        >
            {!pools &&
                <span>loading ...</span>
            }
            {pools?.length < 1 &&
                <span>aun no has creado pools</span>
            }
            {pools?.length &&
                <div className={styl.Page__cardsContainer}>
                    {pools.map(p =>
                        <PoolCard key={p.id} pool={p} />
                    )}
                </div>
            }
        </Page>
    );
}
