import React from 'react';

import Counter from './Counter';
import Numbers from './Numbers';

export default function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <p>
        <Counter
          count={count}
          onClick={onClick}
        />
      </p>
      <p>
        <Numbers
          number={5}
          onClick={onClick}
        />
      </p>
    </div>
  );
}
