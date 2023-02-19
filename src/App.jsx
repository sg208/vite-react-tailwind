import { useMemo, useState } from 'react';
import './App.css';
import TriggerButton from './components/TriggerButton';
import { HelloContext } from './context/hello';

const App = () => {
  const [testing, setTesting] = useState('testing');
  const [testing2, setTesting2] = useState('John');
  const values = { setTesting, setTesting2 };

  const handler2 = () => setTesting2(testing2 === 'John' ? 'Maria' : 'John');
  return (
    <>
      <div className="text-3">Hello hello</div>
      <div className="text-3">{testing}</div>
      <TriggerButton clickHandler={() => setTesting('from parent')} />

      <div className="text-3">{testing2}</div>
      <TriggerButton clickHandler={handler2} text={'Maria'} />
    </>
  );
};

export default App;
