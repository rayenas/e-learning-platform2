import './Navbarl.css';
import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import Body2 from './body2';
import Body from './body'
import Task from './task';
import ProfilePage from './ProfilePage';
import UploadTask from './carte/UploadTask ';


function Navbarl() {
  return (
    <div className="Navbarl">
      <div className="side-by-side">
       <div className='Navbarl-nav'> 
        <span />
        <span />
        <span />
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="/">الصفحة الشخصية</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/e">المواعيد</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cour">الدروس</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/task">المهام</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profil">حسابك</a>
            </li>
          </ul>
          </div>
          <div className='boody'>

          <BrowserRouter>

               <Routes>

                  <Route path='/' element={<Body />} />
                 <Route path='/cour' element={<Body2 />} />
                 <Route path='/task' element={<Task />} />
                 <Route path='/profil' element={<ProfilePage />} />
                 <Route path='/task1' element={<UploadTask />} />
                 

               </Routes>

          </BrowserRouter>

          </div>
          
          </div>
          
    </div>
  );
}

export default Navbarl;
