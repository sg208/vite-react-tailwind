import { useContext } from 'react';
import { HelloContext } from '../context/hello';

const TriggerButton = ({ clickHandler, text }) => {
  // const { setTesting } = useContext(HelloContext);
  return (
    <>
      <button
        className={
          'bg-green-500 px-5 py-3 rounded-lg hover:bg-green-700 hover:text-white'
        }
        onClick={clickHandler}
      >
        {text ?? "Hey, it's still testing"}
      </button>
    </>
  );
};

export default TriggerButton;
