import React from 'react';
import './Tarif.css';

class Tarif extends React.Component{
render(){
    const {name,price, speed,more,isSelected}=this.props;
        return(
            <div className={'tarif-card' +(isSelected? "selected":"")}>
                <div className='tarif-name'>{name}</div>
                <div className='tarif-price'>{price}</div>
                <div className='tarif-speed'>{speed}</div>
                <div className='tarif-more'>{more}</div>
            </div>

        )
    }
}
export default Tarif;