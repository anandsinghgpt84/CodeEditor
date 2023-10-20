import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai'; // You can choose a different theme
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

import './App.css';

function App() {
  const [code, setCode] = useState('// Your code here...');
  const [isLocked, setIsLocked] = useState(false);

  const handleCopyCode = () => {
    const textArea = document.createElement('textarea');
    textArea.value = code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  const handleSaveCode = () => {
    // Implement code saving logic here (e.g., sending code to a server).
  };

  const handleLockCodeEditor = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div className="code-editor">
      <div className="toolbar">
        <Button className="button-blue" onClick={handleCopyCode}>
          Copy
        </Button>
        <Button className="button-yellow" onClick={handleSaveCode}>
          Save
        </Button>
        <Button
          className={isLocked ? 'button-green' : 'button-red'}
          onClick={handleLockCodeEditor}
        >
          {isLocked ? 'Unlock' : 'Lock'}
        </Button>
      </div>
      <AceEditor
        mode="javascript"
        theme="monokai" // Change the theme as needed
        value={code}
        onChange={newCode => setCode(newCode)}
        readOnly={isLocked}
        fontSize={16}
        width="100%"
        height="500px"
      />
    </div>
  );
}

export default App;
