import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
  return (
    <>
      <h1>To Do List</h1>
      <Tabs>
        <TabList>
          <Tab>A fazer</Tab>
          <Tab>Em progresso</Tab>
          <Tab>Finalizado</Tab>
        </TabList>
        <TabPanel>
          <h2>A fazer</h2>
          <ul className="task-list">
          </ul>
        </TabPanel>
        <TabPanel>
          <h2>Em progresso</h2>
          <ul className="task-list">
          </ul>
        </TabPanel>
        <TabPanel>
          <h2>Finalizado</h2>
          <ul className="task-list">
          </ul>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
