import './BookingSideBar.css'

const BookingSideBar = ({ showForm }) => {
  return (
    <div className={showForm ? "side-bar active" : "side-bar"}>
      <form>
        <div>
          <label>Date of Event</label>
          <input
            type='date'
            min='2022-01-24'
            max='2022-06-01'
          />
        </div>
        <div>
          <label>Your Name</label>
          <input
            type='text'
          />
        </div>
        <div>
          <label>Preferred Method of Contact</label>
          <select>
            <option>Email</option>
            <option>Text</option>
            <option>Phone</option>
          </select>
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
          />
        </div>
        <div>
          <label>Please provide a brief description of your event</label>
          <textarea />
        </div>
        <button>Book!</button>
      </form>
    </div>
  )
}

export default BookingSideBar
