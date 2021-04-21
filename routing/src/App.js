
import './App.css';
import {Films} from './Components/Films'
import {Characters} from './Components/Сharacters'
import { Planets} from './Components/Planets'
import { Spaceships} from './Components/Spaceships'
import {Trancports} from './Components/Trancports'


function App() {
  return (
    <main className='container content #f5f5f5 grey lighten-4 ' >
    {/* <h2><a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">thumb_up</i></a></h2>   */}
     <div class="col s12 m7 ">
    
      <div class="card">
      <div class="card-action">
          <a ><span  className="badge  #ffffff white-text #455a64 blue-grey darken-2"> Следуйте вкладкам вверху чтоб посетить разные разделы сайта</span></a>
          <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">directions_walk</i></a>
        </div>
        <div class="card-action">
          <a ><span className="badge  #ffffff white-text #455a64 blue-grey darken-2">Сдесь Вы найдете информацию про Планеты Фильмы Транспорт Космические Корабли</span> </a>
          <a class="btn-floating pulse large  #455a64 blue-grey darken-2 "><i class="material-icons ">directions_walk</i></a>
        </div>
        <div class="card-image">
          <img src="https://miro.medium.com/max/4000/1*E106eLRFX5T2sCluMVzWfQ.jpeg"/>
          <span class="card-title">Домашняя работа React Routing</span>
        </div>
        
       
      </div>
    </div>
 
   </main>

    
  );
}

export default App;
