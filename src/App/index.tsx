import Header from "../components/Header";
import CreateTaskField from "../components/CreateTaskField";
import styles from './App.module.scss';
import Button from '../components/Button';
import CountingLabel from "../components/CountingLabel";
import TaskListItem from "../components/TaskListItem";
import PlaceHolderBox from "../components/PlaceholderBox";

import { useState } from 'react';

import AppendIcon from "../components/Icons/AppendIcon";

export default function App() {
  
  interface TaskItemInterface {
    id: string;
    task: string;
    done: boolean;
  }

  const [taskList, setTaskList] = useState<TaskItemInterface[]>([]);
  const [taskDoneList, setTaskDoneList] = useState<TaskItemInterface[]>([]);
  const [createTaskInput, setCreateTaskInput] = useState('');


  function handleNewTask () {
    const newTask = createTaskInput.trim();
    if (newTask){
      setTaskList((prev) => {
        const newTaskItem = {
          id: crypto.randomUUID(),
          task: newTask,
          done: false
        }
        return [...prev, newTaskItem]
      });
    }
    setCreateTaskInput('');
  }

  function handleCreateTaskFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setCreateTaskInput(value);
  }


  function handleDeleteListItem(taskToDelete: TaskItemInterface) {
    const newTaskList = taskList.filter((taskItem) => taskItem.id !== taskToDelete.id);
    setTaskList(newTaskList);
    if (taskToDelete.done) {
      const newTaskDoneList = taskDoneList.filter((taskItem) => taskItem.id !== taskToDelete.id);
      setTaskDoneList(newTaskDoneList);
    }
  }

  function handleCheckListItem(taskToCheck: TaskItemInterface) {
    const newTaskList = taskList.map((taskItem) => {
      if (taskItem.id === taskToCheck.id) {
        taskItem.done = !taskItem.done;
      }
      return taskItem;
    })
    setTaskList(newTaskList);

    const newTaskDoneList = newTaskList.filter((taskItem) => {
      return taskItem.done;
    });
    setTaskDoneList(newTaskDoneList);
  }

  function handleKeyDownTaskInput(event : React.KeyboardEvent<HTMLElement>) {
    if (event.key === 'Enter') {
      handleNewTask();
    }
  }

  return (

    <div className={styles.app}>
      <Header title='todo'/>
      
      <main>
        <div className={styles.createTask_container}>
          <CreateTaskField
            placeholder="Adicione uma nova tarefa"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleCreateTaskFieldChange(event)}
            value={createTaskInput}
            onKeyDown={(event: React.KeyboardEvent<HTMLElement>) => handleKeyDownTaskInput(event)}
          />
          <Button
            text="Criar"
            Icon={AppendIcon}
            onClick={handleNewTask}

          />
        </div>
        <header>
          <CountingLabel
            text="Tarefas criadas"
            color={'--blue'}
            amount={taskList.length}
            tasksDoneCount={taskDoneList.length}
          />
          <CountingLabel
            text="Concluídas"
            color={'--purple'}
            amount={taskList.length}
            type="progress"
            tasksDoneCount={taskDoneList.length}

          />
        </header>
        <ul className={styles.tasksList}>
          {taskList.length === 0 && 
            <PlaceHolderBox
              mainParagraph="Você ainda não tem tarefas cadastradas"
              secondaryParagraph="Crie tarefas e organize seus itens a fazer"
            />
          }
          {taskList.length > 0 && 
            taskList.map((taskItem) => {
              return <TaskListItem
                        task={taskItem.task}
                        key={taskItem.id}
                        done={taskItem.done}
                        onDeleteListItem={() => handleDeleteListItem(taskItem)}
                        onCheckListItem={() => handleCheckListItem(taskItem)}
                    />
            })
          }
        </ul>
      </main>
    </div>
  )
}
