import { useState, useRef } from 'react';

export default function Counters() {
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}>
        Toggle with setState
      </button>
      <button
        onClick={() => {
          ref.current.remove();
        }}>
        Remove from the DOM
      </button>
      {show && <p >Hello world</p>}
      <div ref={ref} >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi eum quaerat! Natus autem debitis alias, odio laborum cumque laboriosam? Nemo inventore nostrum sit dolor cumque architecto laborum vero dolorem!
      </div>
    </div>
  );
}
