import NavBar from "./components/NavBar";
import Mailbox from "./components/Mailbox";
import NewMailbox from "./components/NewMailbox";
import MailboxList from "./components/MailboxList";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState } from "react";

const initialState = [
  { _id: 1, boxSize: 'Small', boxholder: 'Alex' },
  { _id: 2, boxSize: 'Medium', boxholder: 'John' },
  { _id: 3, boxSize: 'Large', boxholder: 'Emma' },
  { _id: 4, boxSize: 'Small', boxholder: 'Sophia' },
  { _id: 5, boxSize: 'Medium', boxholder: 'Michael' }
];



const App = () => {
  const [mailboxes, setMailboxes] = useState(initialState)

  const addNewMailbox = (input) => {
    input._id = mailboxes.length + 1;
    const updateMailboxs = [...mailboxes, input]
    setMailboxes(updateMailboxs)

  }



  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/mailbox/:mailboxId" element={ <Mailbox mailboxes={mailboxes} />}/>
        <Route path="/mailboxList" element={ <MailboxList mailboxes={mailboxes} />}/>
        <Route path="mailbox/new" element={ <NewMailbox addNewMailbox={addNewMailbox}/>}/>
        <Route path="*" element={ <h1>Oh No!, Page Not Found!</h1>}/>
      </Routes>
    </>
  )
};

export default App;
