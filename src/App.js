import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './login/login';

import Body from './nav/jwadou/body';
import Body2 from './nav/jwadou/body2';
import Task1 from './nav/jwadou/task';
import ProfilePage from './nav/jwadou/ProfilePage';
import UploadTask from './nav/jwadou/carte/UploadTask ';
import Agenda from './nav/jwadou/agenda/agenda-jwadou';
import Agendas from './nav/sidi/agenda/agenda-sidi';
import Uploadcour from './nav/sidi/Uploadcour';
import ProfilePages from './nav/sidi/ProfilePage';
import Tasks from './nav/jwadou/task/tasks';
import Task_sidi from './nav/sidi/task_sidi';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          
          


                <Route path='/jwadou' element={<Body />} />
                 <Route path='/cour' element={<Body2 />} />
                 <Route path='/task' element={<Task1 />} />
                 <Route path='/profil' element={<ProfilePage />} />
                 <Route path='/agenda-jwadou' element={<Agenda />} />
                 <Route path='/task1' element={<Tasks />} />


                 <Route path='/sidi' element={<Uploadcour />} />
                 <Route path='/Uploadcour' element={<Uploadcour/>} />
                 <Route path='/Task_sidi' element={<Task_sidi/>} />
                  <Route path='/agenda-sidi' element={<Agendas />} />
                 <Route path='/profils' element={<ProfilePages />} />
          {/* Other routes here */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
