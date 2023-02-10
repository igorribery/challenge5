export const Pokemon = ( { details }: any) => {

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