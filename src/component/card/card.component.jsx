import './card.Styles.css';

export const Card =props =>(
    <div className='card-container'>
        <img className='pic-size' src={`https://robohash.org/${props.monstar.id}?set=set2`} alt="No montar"/>
        <h2>{props.monstar.name}</h2>
        <p>{props.monstar.email}</p>
    </div>
)