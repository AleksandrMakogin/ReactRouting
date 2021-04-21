
import {useState} from 'react'

const Spaceships =()=>{
   
    const [count, setCount] = useState(1)
    const [data, setData] = useState([]);

    
   const handelLeft =()=>{
    
      if(count === 1){
       return;  
        }
       setCount(count - 1);
       fetch(`http://swapi.dev/api/starships/${count}`)
            .then((response) => response.json())
            .then((json) => setData(json))
       
    }

    const handleRigt=()=>{
      fetch(`http://swapi.dev/api/starships/${count}`)
        .then((response) => response.json())
        .then((json) => setData(json))
        if(count === 36)
        {
          return;
        }
      setCount(count + 1);
       
    }

    return (
        <main className='container content #f5f5f5 grey lighten-4  ' style={{padding:-75}} >
        <div class="col s12 m5 ">
    
    <div class="card">
      
    
      <div class="card-image">
        <img style={{height:500}} src="https://www.herocollector.com/Content/ArticleImages/e042007f-742e-4eac-94f5-0f1cd73c336a.jpg" />
        <span class="card-title">страница : {count}</span>
      </div>
      <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Имя :  {data.name} </span></a>
        <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">priority_high</i></a>
      </div>
      <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Модель :  {data.model} </span></a>
        <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">priority_high</i></a>
      </div>
      {/* <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Описание :  {data.opening_crawl} </span></a>
        <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">priority_high</i></a>
      </div> */}
      <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Производитель : {data.manufacturer} </span></a>
        <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">priority_high</i></a>
      </div>
      <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Стоимость : {data.cost_in_credits} </span></a>
        <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">priority_high</i></a>
      </div>
      <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Длина : {data.length} </span></a>
        <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">priority_high</i></a>
      </div>
      <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Максимальная скорость : {data.max_atmosphering_speed} </span></a>
        <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">priority_high</i></a>
      </div>
      <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Количество пасажиров : {data.passengers} </span></a>
        <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">priority_high</i></a>
      </div>
      <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Грузоподемность : {data.cargo_capacity} </span></a>
        <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">priority_high</i></a>
      </div>
      
      
      <div class="card-action">
      <a onClick={handelLeft} class="waves-effect waves-light btn #78909c blue-grey lighten-1 " style={{marginLeft:1}}><i class="material-icons ">keyboard_arrow_left</i> <i class="material-icons ">arrow_back</i> </a>
      
      <a  onClick={handleRigt }  class=" waves-effect waves-light btn #78909c blue-grey lighten-1" style={{marginLeft:920}}><i class="material-icons ">arrow_forward</i><i class="material-icons ">keyboard_arrow_right</i> </a>
    
      </div>
      
     
    </div>
  </div>
       </main>
    )
}

export {Spaceships}