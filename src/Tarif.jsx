import React,{useState} from 'react';
import './Tarif.scss';

function Tarif({name,price, speed,more,isSelected}){

    const [selected, setSelected] = useState([]);

    const handleSelect = () => {
      setSelected(!selected)
    }
    const select = selected ? "selected" : "";
        return(
            <div onClick={handleSelect} className={select}>
                <div className='tarif-name'>{name}</div>
                <div className='tarif-price'>{price}</div>
                <div className='tarif-speed'>{speed}</div>
                <div className='tarif-more'>{more}</div>
            </div>

        )
    }

export default Tarif;