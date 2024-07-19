// src/App.jsx

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavrBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import MailboxForm from './components/MailboxForm/MailboxForm';


const App = () => {

  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />

      </Routes>
    </>
  );
};

export default App;