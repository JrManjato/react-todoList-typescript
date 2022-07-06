import React, { useState } from 'react';
import './App.css';
import { ITask } from "./components/ITask";
import Input from './components/InputField';
import { TodoListItems } from './components/TodoListItem';

const App: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [scale, setScale] = useState('todo');
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const [color] = useState<string>("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (title || description) {
      setTodoList([...todoList, { id: Date.now(), title, description, scale }]);
      setTitle(""); setDescription("");
    }
  };

  function GettingValues(e: any): string[] {
    const datas: string[] = [];
    e.preventDefault();
    var target = e.target;
    while (target && target.nodeName !== "DIV") {
      target = target.parentNode;
    }
    const title = target.getElementsByTagName("H5");
    const description = target.getElementsByTagName("P");
    setTodoList(todoList.filter((elt) => elt.title != title[0].innerHTML));
    datas.push(title[0].innerHTML); datas.push(description[0].innerHTML);
    setTitle(datas[0]);
    setDescription(datas[1]);
    return datas;
  }

  return (
    <>
      <div className='all'>

        <div className='container light-container title col-md-12 col-sm-12'>
          <h1 className='light' data-text="TO DO LIST">TO DO LIST</h1>
        </div>

        <div className='container col-md-12 col-sm-12 input_container'>
          <Input title={title} setTitle={setTitle} description={description} setDescription={setDescription}
            scale={scale} setScale={setScale} handleAdd={handleAdd} />
        </div>

        <div className='container task-evolution col-md-12 col-sm-12'>

          <div className='col-md-3 col-sm-12 container-item'>
            <h2 className='todo' data-text="TO DO">TO DO</h2>
            {todoList.map((elt) => elt.scale === 'todo' ? <TodoListItems elt={elt} color={color} scale={elt.scale} getValues={GettingValues} />
              : null)}
          </div>
          <div className='col-md-3 col-sm-12 container-item' >
            <h2 className='doing' data-text="DOING">DOING</h2>
            {todoList.map((elt) => elt.scale === 'doing' ? <TodoListItems elt={elt} color={color} scale={elt.scale} getValues={GettingValues} />
              : null)}
          </div>
          <div className='col-md-3 col-sm-12 container-item'>
            <h2 className='done' data-text="DONE">DONE</h2>
            {todoList.map((elt) => elt.scale === 'done' ? <TodoListItems elt={elt} color={color} scale={elt.scale} getValues={GettingValues} />
              : null)}
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
