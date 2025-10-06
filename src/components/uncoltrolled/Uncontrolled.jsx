import React, { useRef } from 'react';

const Uncontrolled = () => {
  const emailRef = useRef('');
  const passRef = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="email" placeholder="Email" /> <br />
        <input ref={passRef} type="password" placeholder="Password" /> <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Uncontrolled;
