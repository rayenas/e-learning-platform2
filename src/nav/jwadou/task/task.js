import './task.css';
import Navbar from '../../Navbar';


function Task() {
  return (
    <div className="task">
 <div className="card-task">
 <main>
 <section className="task">
 
      
        <div className="task-details" >
         <a href='/task1'> <h2 className="task-title">Tâche 1</h2>
          <p className="task-deadline">Date limite: 20 janvier 2024</p></a>
        </div>
        <div className="task-details" >
         <a href='/task1'> <h2 className="task-title">Tâche 2</h2>
          <p className="task-deadline">Date limite: 20 janvier 2024</p></a>
        </div>
      </section>
      
      </main>

      </div>
    </div>
  );
}

export default Task;
