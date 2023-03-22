import './App.css';
import React from 'react';
import './Tarif';
import Tarif from './Tarif';

const tarifs =[
  {id: 1, name:"Безлимитный 300", price:"300 руб/мес", speed:"до 10 Мбит/сек", more:"Объем включенного графика не ограничен"},
  {id: 2, name:"Безлимитный 450", price:"450 руб/мес",  speed:"до 50 Мбит/сек", more:"Объем включенного графика не ограничен"},
  {id: 3, name:"Безлимитный 550", price:"550 руб/мес",  speed:"до 100 Мбит/сек", more:"Объем включенного графика не ограничен", isSelected:true},
  {id: 4, name:"Безлимитный 1000", price:"1000 руб/мес",  speed:"до 200 Мбит/сек", more:"Объем включенного графика не ограничен"}
]

class  App extends React.Component {
  render(){
  return (
    <div className="App">
      {
        tarifs.map((tarif)=>
        <Tarif key={tarif.id} name={tarif.name} price={tarif.price} speed={tarif.speed} more={tarif.more} isSelected={tarif.isSelected}></Tarif>
        )
      }
      
    </div>
  );
}
}
export default App;
