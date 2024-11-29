// LinkedListVisualizer.js
import React, { useState } from 'react';
// import LinkedList from './LinkedList.js';
import LinkedList from './LinkedList.js';
import './LinkedListVisualizer.css';

const LinkedListVisualizer = () => {
  const [list] = useState(new LinkedList());
  const [nodes, setNodes] = useState([]);
  const [value, setValue] = useState('');

  const handleInsertHead = () => {
    if (value) {
      list.insertAtHead(parseInt(value));
      setNodes(list.toArray());
      setValue('');
    }
  };

  const handleInsertTail = () => {
    if (value) {
      list.insertAtTail(parseInt(value));
      setNodes(list.toArray());
      setValue('');
    }
  };

  const handleDeleteHead = () => {
    list.deleteAtHead();
    setNodes(list.toArray());
  };

  const handleDeleteTail = () => {
    list.deleteAtTail();
    setNodes(list.toArray());
  };

  return (
    <div className="visualizer-container">
      <h1>Linked List Visualizer</h1>
      <div className="input-controls">
        <input
          type="number"
          placeholder="Enter value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleInsertHead}>Insert at Head</button>
        <button onClick={handleInsertTail}>Insert at Tail</button>
        <button onClick={handleDeleteHead}>Delete Head</button>
        <button onClick={handleDeleteTail}>Delete Tail</button>
      </div>
      <div className="linked-list-display">
        {nodes.map((node, index) => (
          <React.Fragment key={index}>
            <div className="node">
              <span>{node}</span>
            </div>
            {index < nodes.length - 1 && <span className="arrow">→</span>}
          </React.Fragment>
        ))}
         <span className="arrow">→</span>
            <div>
                <span>NULL</span>
            </div>   
      </div>
    </div>
  );
};

export default LinkedListVisualizer;
