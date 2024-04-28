import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Button from './components/Button/Button';

function App() {
  const user = {
    name: 'john',
    surname: '',
    age: 40,
    online: true,
  };

  // if (gjhqs) {}

  // if (user.online) {

  // } else {

  // }

  ('' && undefined) || ('kqhd' && true);

  const students = ['anna', 'tom'];

  students.map((student) => console.log(student));

  const todos = [
    'buy some milk',
    'go to gym',
    'go out with friends',
    'go to cinema',
  ];

  return (
    <div>
      <Header />

      <div>
        Welocme back, {user.name}
        {/* <button>click</button> */}
        <Button />
      </div>
      <div>{user.online ? 'You are online!' : 'Not online'}</div>

      <div>{user.age > 50 && 'You are a winner'}</div>

      <div>{user.surname ? user.surname : 'No surname was added.'}</div>

      <div>{user.surname || 'No surname was added.'}</div>
      {/* <ul
        style={{
          listStyle: 'none',
        }}
      >
        <li>buy some milk</li>
        <li>go to gym</li>
        <li>go out with friends</li>
      </ul> */}

      {/* <div>
        {students.map((student) => (
          <p>
            {student} <button>delete</button>
          </p>
        ))}
      </div> */}

      {students.length > 0
        ? students.map((student) => (
            <p>
              {student} <Button />{' '}
            </p>
          ))
        : 'No student was resgistered'}

      {todos.length > 0 ? todos.map((todo) => <li>{todo}</li>) : 'Add a todo'}

      <div>
        <Nav />
      </div>
    </div>
  );
}

export default App;
