import { useEffect, useState } from "react"
import axios from 'axios'
import { Details } from "../types/details";


export const Pokemon = ( { data }: any) => {

    const [details, setDetails] = useState<Details | null>(null);

    useEffect(() => {
        loadPokemons()
    }, []);

    const loadPokemons = async () => {
        const res = await axios.get(data.url);
        setDetails(res.data);
    }


    if(!details) {
        return <div>-</div>;
    }



    return (
        <div style={{ display: 'flex', alignItems: 'center'}}>
            <img src={details.sprites.front_default} style={{ width: 50, marginRight: 10}} />

            <span>
                <b>{details.name}</b> - EXP {details.base_experience}
            </span>
        </div>
    )
    

}