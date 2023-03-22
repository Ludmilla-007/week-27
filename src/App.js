import './App.css';
import React from 'react';
import './Tarif';
import Tarif from './Tarif';

const tarifs =[
  {name:"Безлимитный 300", price:"300 руб/мес", speed:"до 10 Мбит/сек", more:"Объем включенного графика не ограничен"},
  {name:"Безлимитный 450", price:"450 руб/мес",  speed:"до 50 Мбит/сек", more:"Объем включенного графика не ограничен"},
  {name:"Безлимитный 550", price:"550 руб/мес",  speed:"до 100 Мбит/сек", more:"Объем включенного графика не ограничен", isSelected:true},
  {name:"Безлимитный 1000", price:"1000 руб/мес",  speed:"до 200 Мбит/сек", more:"Объем включенного графика не ограничен"}
]

class  App extends React.Component {
  render(){
  return (
    <div className="App">
      {
        tarifs.map((tarif)=>
        <Tarif name={tarif.name} price={tarif.price} speed={tarif.speed} more={tarif.more} isSelected={tarif.isSelected}></Tarif>
        )
      }
      
    </div>
  );
}
}
export default App;
