import './body.css';
import Date from './carte/date';
import Cours from './cour/cours';
import Navbarl from '../Navbarl';



function body() {
  return (
    <div className="body">
      
      <div>
       <Navbarl />
       </div>
       <div className='boody'>
       <Date />
       <Cours />
       </div>
        

    </div>
  );
}

export default body;
