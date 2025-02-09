// src/components/MailboxList/MailboxList.jsx
import { Link } from 'react-router-dom';


const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      {mailboxes.map(mailbox => (
        <div key={mailbox._id} className="mail-box">
          <Link to={`/mailboxes/${mailbox._id}`}>{mailbox._id}</Link>
        </div>
      ))}
    </div>
  );
};

export default MailboxList;
