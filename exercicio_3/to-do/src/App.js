import { useEffect, useState } from 'react';
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const tasksSaved = localStorage.getItem('tasks');
    if (tasksSaved) {
      setTasks(JSON.parse(tasksSaved));
    }
  }, []);

  function addNewTask() {
    if (input === '') {
      setError(true);
    } else {
      setError(false);
      const newTask = {
        title: input,
        id: uuidv4(),
        status: 'new'
      }
      const newTasks = [...tasks, newTask]
      setTasks(newTasks);
      setInput('');
      saveInLocalStorage(newTasks);
    }
  }

  function startTask(id) {
    setTasks(tasks => {
      const taskStarted = { ...tasks.find(task => task.id === id) };
      taskStarted.status = 'doing';
      const allTasks = tasks.filter(task => task.id !== id);
      const newTasks = [...allTasks, taskStarted];
      saveInLocalStorage(newTasks)
      return newTasks;
    });
  }

  function finishTask(id) {
    setTasks(tasks => {
      const taskFinished = { ...tasks.find(task => task.id === id) };
      taskFinished.status = 'done';
      const allTasks = tasks.filter(task => task.id !== id);
      const newTasks = [...allTasks, taskFinished];
      saveInLocalStorage(newTasks);
      return newTasks;
    });
  }

  function deleteTask(id) {
    setTasks(tasks => {
      const allTasks = tasks.filter(task => task.id !== id);
      const newTasks = [...allTasks];
      saveInLocalStorage(newTasks)
      return newTasks;
    });
  }

  function saveInLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  return (
    <>
      <h1>To Do List</h1>
      <Tabs>
        <TabList>
          <Tab>A fazer</Tab>
          <Tab>Em progresso</Tab>
          <Tab>Finalizado</Tab>
        </TabList>
        <div className="form">
          <input type="text" value={input} onChange={(e) => {
            setError(false);
            setInput(e.target.value);
          }} placeholder="Nova tarefa.." />
          <button onClick={addNewTask}>Adicionar</button>
          <button>Limpar tarefas</button>
          <div className="input-erro">{error && <span>ops, digite a tarefa</span>}</div>
        </div>

        <TabPanel>
          <h2>A fazer</h2>
          <ul className="task-list">
            {tasks.filter(task => task.status === 'new').map(newTask =>
              <div key={newTask.id} className="task">
                <li className="item" >{newTask.title}</li>
                <div className="task-icon">
                  <i className="fa fa-trash-alt" onClick={() => deleteTask(newTask.id)}></i>
                  <i className="fas fa-play" onClick={() => startTask(newTask.id)}></i>
                </div>
              </div>
            )}
          </ul>
        </TabPanel>
        <TabPanel>
          <h2>Em progresso</h2>
          <ul className="task-list">
            {tasks.filter(task => task.status === 'doing').map(newTask =>
              <div key={newTask.id} className="task">
                <li className="item">{newTask.title}</li>
                <div className="task-icon">
                  <i className="fa fa-trash-alt" onClick={() => deleteTask(newTask.id)}></i>
                  <i className="fas fa-check-square" onClick={() => finishTask(newTask.id)}></i>
                </div>
              </div>
            )}
          </ul>
        </TabPanel>
        <TabPanel>
          <h2>Finalizado</h2>
          <ul className="task-list">
            {tasks.filter(task => task.status === 'done').map(newTask =>
              <div key={newTask.id} className="task">
                <li className="item">{newTask.title}</li>
                <div className="task-icon">
                  <i className="fa fa-trash-alt" onClick={() => deleteTask(newTask.id)}></i>

                </div>
              </div>
            )}
          </ul>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
