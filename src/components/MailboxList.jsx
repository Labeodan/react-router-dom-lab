import { Link } from "react-router-dom"

function MailboxList({mailboxes}) {
  const listMailboxes = mailboxes.map(mailbox => {
    return (
      <li key={mailbox._id} >
        <Link className="mail-box" to={`/mailbox/${mailbox._id}`}>{`Mailbox ${mailbox._id}` }</Link>
      </li>
    )
  })

  return (
    <>
      <h1>Mailbox List</h1>
      <ul>
        {listMailboxes}
      </ul>
    </>
  )
}

export default MailboxList
