import {useState} from 'react'


const Planets =()=>{
   
    const [count, setCount] = useState(1)
    const [data, setData] = useState([]);

    
  
   const handelLeft =()=>{
    
      if(count === 1){
       return;  
        }
       setCount(count - 1);
       fetch(`http://swapi.dev/api/planets/${count}`)
            .then((response) => response.json())
            .then((json) => setData(json))
       
    }

    const handleRigt=()=>{
      fetch(`http://swapi.dev/api/planets/${count}`)
        .then((response) => response.json())
        .then((json) => setData(json))
      
        if(count === 60)
        {
          return ;
        }
      setCount(count + 1);

       
    }
    
  

    return (
    <main className='container content #f5f5f5 grey lighten-4  ' style={{padding:-75}} >
        <div class="col s12 m5 ">
    
    <div class="card">
      
    
      <div class="card-image">
        <img style={{height:500}} src="http://spacegid.com/wp-content/uploads/2013/07/Planetyi-v-Solnechnoy-sisteme.jpg" />
        <span class="card-title">страница : {count}</span>
      </div>
      <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Имя :  {data.name} </span></a>
        <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">priority_high</i></a>
      </div>
      <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Период вращения :  {data.rotation_period} </span></a>
        <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">priority_high</i></a>
      </div>
      <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Орбитальный период :  {data.orbital_period} </span></a>
        <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">priority_high</i></a>
      </div>
      <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Диаметр : {data.diameter} </span></a>
        <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">priority_high</i></a>
      </div>
      <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Климат : {data.climate} </span></a>
        <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">priority_high</i></a>
      </div>
      <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Гравитация : {data.gravity} </span></a>
        <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">priority_high</i></a>
      </div>
      <div class="card-action">
        <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Покритие/Местность : {data.terrain} </span></a>
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

export {Planets} 