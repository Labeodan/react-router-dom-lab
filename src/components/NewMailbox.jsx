import { useState } from "react"
import { useNavigate } from "react-router-dom"

function NewMailbox({addNewMailbox}) {
  const [formInput, setFormInput] = useState({
    boxholder: "",
    boxSize: "small"
  })

  const navigate = useNavigate()

  const handelSubmit = (e,) => {
      e.preventDefault()
      addNewMailbox(formInput)
      setFormInput(
        {
          boxholder: "",
          boxSize: "small"
        }
        
      )
      navigate("/mailboxList")
  }
  const handelChange = ({target}) => {
    const updateForm = {...formInput, [target.name]:target.value}
    setFormInput(updateForm)
  }

  return (
    <div>
      <h1>New Mailbox</h1>
      <form onSubmit={handelSubmit}>
        <label htmlFor="boxholder">Enter a Boxholder:</label>
        <input type="text" name="boxholder" value={formInput.boxholder} onChange={handelChange} />

        <label htmlFor="boxSize">Select a Box Size:</label>
        <select id="boxSize" name="boxSize" value={formInput.boxSize}  onChange={handelChange}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <button type="submit">Submit</button>
      

      </form>
    </div>
  )
}

export default NewMailbox
