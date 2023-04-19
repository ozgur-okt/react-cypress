import React, { useState } from 'react';

function TestComponent() {
  const [name, setName] = useState('John Doe');
  const [showModal, setShowModal] = useState(false);
  const [showHidden, setShowHidden] = useState(false);
  const [submittedConfirm, setSubmittedConfirm] = useState(false);
  const [selectedValue, setSelectedValue] = useState('option1');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    setSubmittedConfirm(true);
  };

  return (
    <div>
      <h1 id="logo" style={{ backgroundColor: 'gray', color: 'white' }}>
        My App
      </h1>
      <p id="greeting">Hello, World!</p>
      <button onClick={() => alert('Button clicked!')}>Click me</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <select id="my-select" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <button type="submit" id="submit">
          Submit
        </button>
      </form>
      <p id="success" style={{ display: submittedConfirm ? 'block' : 'none' }}>
        Form submitted successfully!
      </p>
      <a href="/about" id="about-link">
        About
      </a>
      <div
        id="modal"
        style={{ display: showModal ? 'block' : 'none', backgroundColor: 'lightgray' }}
      >
        <h2>Modal</h2>
        <button id="close-modal" onClick={() => setShowModal(false)}>
          Close
        </button>
      </div>
      <button id="open-modal" onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      <div id="red-box" style={{ backgroundColor: 'red', width: '100px', height: '100px' }} />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <div id="hidden-element" style={{ display: showHidden ? 'block' : 'none' }}>
        I'm hidden by default
      </div>
      <button id="show-button" onClick={() => setShowHidden(true)}>
        Show hidden element
      </button>
    </div>
  );
}

export default TestComponent;
