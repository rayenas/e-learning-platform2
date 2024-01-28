import './Navbarljj.css';
import Uploadcour from './Uploadcour';
import Comptjj from './comptjj';



function Navbarljj() {
  return (
    <div className="Navbarl">
      <div className="side-by-side">
       <div className='Navbarl-nav'> 
        <span />
        <span />
        <span />
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="/">   إنشاء مهام أو دروس</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/e">إنشاء موعد إمتحان</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cour"> مهام</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/task">  حسابك</a>
            </li>
            
          </ul>
          </div>
          <div className='boody'>

        <Comptjj />

          </div>
          
          </div>
          
    </div>
  );
}

export default Navbarljj;
