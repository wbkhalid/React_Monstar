import './card-list.Styles.css';
import '../card/card.component';
import { Card } from '../card/card.component';


export const CardList = props => {
    return<div className='card-list'>{
        props.monstar.map(monstar => 
            <Card key={monstar.id} monstar={monstar}/>
        )}
        </div>;
}