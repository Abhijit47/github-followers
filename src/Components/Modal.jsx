import React, { useState } from 'react';

const Modal = (props) => {
  const [visible, setVisible] = useState(false);
  console.log(props.value);
  if (props.value === true) {
    setVisible(props.value);
  } else {
    setVisible(false);
  }

  return (
    <>
      {!visible && <div className='display-1'>Modal</div>}
    </>
  );
};

export default Modal;