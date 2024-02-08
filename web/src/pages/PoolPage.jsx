import React, {useState} from "react";
import Page from "./Page";
import styl from "./PoolPage.module.scss";
import IdeaCard from "../components/IdeaCard";

export default () => {
    const [pool, setPool] = useState({
        id: '001',
        title: 'Club del libro CP',
        autor: 'javier',
        wining: 'don quijote',
        maxVotes: 5,
        ideas: [
            {
                id: '001',
                title: 'Don quijote',
                autor: 'javier',
                description: ' este es un libro de un loquito y su amigo',
                image: null,
                upVotes: 16,
                hasOwnUpVote: true,
                downVotes: 5,
                hasOwnDownVote: false,
                createdAt: '',
                updatedAt: ''
            },
            {
                id: '002',
                title: 'Don quijote',
                autor: 'luis',
                description: ' este es un libro de un loquito y su amigo',
                image: null,
                upVotes: 6,
                hasOwnUpVote: false,
                downVotes: 5,
                hasOwnDownVote: true,
                createdAt: '',
                updatedAt: '',
            },
            {
                id: '003',
                title: 'Don quijote',
                autor: 'daniel',
                description: ' este es un libro de un loquito y su amigo',
                image: null,
                upVotes: 6,
                hasOwnUpVote: false,
                downVotes: 5,
                hasOwnDownVote: false,
                createdAt: '',
                updatedAt: '',
            },
        ]
    })

    return (
        <Page
            className={styl.Page}
            title={pool.title}
        >
            {!pool &&
             <span>loading ...</span>
            }
            {pool &&
                <div className={styl.Page__cardsContainer}>
                    {pool.ideas?.map(i =>
                        <IdeaCard key={i.id}
                            idea={i}
                        />
                    )}
                </div>
            }
        </Page>
    );
}
