import React, { useState } from 'react';

const MyEditor = () => {
  const [text, setText] = useState('');

  const handleTextareaChange = (event) => {
    const value = event.target.value;
    const lines = value.split('\n');

    const formattedLines = lines.map((line) => {
      if (line.startsWith('# ')) {
        const spaceIndex = line.indexOf(' ', 2);
        if (spaceIndex !== -1) {
          return `# ${line.substring(2, spaceIndex)}\n${line.substring(spaceIndex + 1)}`;
        }
        return `# ${line.substring(2)}`; // Maintain the heading format
      } else if (line.startsWith('* ')) {
        const spaceIndex = line.indexOf(' ', 2);
        if (spaceIndex !== -1) {
          return `* ${line.substring(2, spaceIndex)}\n${line.substring(spaceIndex + 1)}`;
        }
        return `* ${line.substring(2)}`; // Maintain the bold format
      } else if (line.startsWith('** ')) {
        const spaceIndex = line.indexOf(' ', 3);
        if (spaceIndex !== -1) {
          return `** ${line.substring(3, spaceIndex)}\n${line.substring(spaceIndex + 1)}`;
        }
        return `** ${line.substring(3)}`; // Maintain the red color format
      } else if (line.startsWith('*** ')) {
        const spaceIndex = line.indexOf(' ', 4);
        if (spaceIndex !== -1) {
          return `*** ${line.substring(4, spaceIndex)}\n${line.substring(spaceIndex + 1)}`;
        }
        return `*** ${line.substring(4)}`; // Maintain the underline format
      }
      return line; // Keep other lines unchanged
    });

    const formattedText = formattedLines.join('\n');
    setText(formattedText);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextareaChange}
        placeholder="Type here..."
        rows={5}
        cols={50}
        style={{ fontFamily: 'Arial', fontSize: '14px' }} // Add styles here
      />
      <div>
        {text.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line.startsWith('# ') ? (
              <h1>{line.substring(2)}</h1>
            ) : line.startsWith('* ') ? (
              <strong>{line.substring(2)}</strong>
            ) : line.startsWith('** ') ? (
              <span style={{ color: 'red' }}>{line.substring(3)}</span>
            ) : line.startsWith('*** ') ? (
              <u>{line.substring(4)}</u>
            ) : (
              <div>{line}</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MyEditor;

