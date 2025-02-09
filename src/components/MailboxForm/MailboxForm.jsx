// src/components/MailboxForm/MailboxForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
  const [boxOwner, setBoxOwner] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxOwner, boxSize });
    navigate('/mailboxes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="boxOwner">Box Owner</label>
      <input
        type="text"
        id="boxOwner"
        value={boxOwner}
        onChange={(e) => setBoxOwner(e.target.value)}
      />
      <label htmlFor="boxSize">Box Size</label>
      <select
        id="boxSize"
        value={boxSize}
        onChange={(e) => setBoxSize(e.target.value)}
      >
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MailboxForm;
