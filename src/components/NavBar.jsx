import { Link } from "react-router-dom"

function NavBar() {
  return (
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/mailboxList"}>Mailboxes</Link>
      </li>
      <li>
        <Link to={"/mailbox/new"}>New Mailbox</Link>
      </li>
    </ul>
  )
}

export default NavBar
