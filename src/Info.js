import React, { useState, useRef } from 'react';

const Info = ({ employee, addEmployee }) => {
  const [inputs, setInputs] = useState({ name: '', dept: '' });

  const nextId = useRef(4);
  const nameId = useRef();

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  const onClick = () => {
    console.log(inputs);
  };

  const { name, dept } = inputs;

  const onSubmit = (e) => {
    e.preventDefault();
    // setEmployee([...employee, { id: nextId.current++, name, dept }]);
    addEmployee({ id: nextId.current++, name, dept });
    setInputs({ name: '', dept: '' });
    nameId.current.focus();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={nameId} name="name" value={name} onChange={onChange} />
        <input name="dept" value={dept} onChange={onChange} />
        <button type="submit" onClick={onClick}>
          확인
        </button>
      </form>
      <hr />
      <ul>
        {employee.map((person) => (
          <li key={person.id}>
            {person.name}({person.dept})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Info;
