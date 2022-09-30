import { useState } from 'react';

export const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='w-72 rounded-xl border-2 border-black p-4 text-center'>
      <div className='text-2xl'>Example component</div>
      <p className='text-xl font-bold'>{count}</p>
      <div className='flex justify-between px-16'>
        <button
          className='w-12 rounded-lg bg-blue-500 py-1  font-bold text-white hover:bg-blue-700'
          onClick={() => setCount(count - 1)}
        >
          - 1
        </button>
        <button
          className='w-12 rounded-lg bg-blue-500 py-1  font-bold text-white hover:bg-blue-700'
          onClick={() => setCount(count + 1)}
        >
          + 1
        </button>
      </div>
    </div>
  );
};

export default Example;
