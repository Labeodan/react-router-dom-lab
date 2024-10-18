import { useParams } from "react-router-dom";

function Mailbox({mailboxes}) {
  const {mailboxId} = useParams();
  const mailbox = mailboxes.find((mailbox) => mailbox._id === Number(mailboxId) )


  return (
    <div className="mail-box">
      <h1>Mailbox {mailboxId}</h1>
      <h2>Details</h2>
      <p>Boxholder: {mailbox.boxholder}</p>
      <p>Box Size: {mailbox.boxSize}</p>
    </div>
  )

}

export default Mailbox
