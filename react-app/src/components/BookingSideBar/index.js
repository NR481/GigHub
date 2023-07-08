import { useState } from "react";
import "./BookingSideBar.css";

const BookingSideBar = ({ showForm }) => {
    const [bookMessage, setBookMessage] = useState(false);

    const handleBooking = (e) => {
        e.preventDefault();
        setBookMessage(!bookMessage);
    };

    return (
        <>
            {bookMessage && (
                <div className={showForm ? "side-bar active" : "side-bar"}>
                    <div className="message">
                        <p>Thanks for Booking!</p>
                        <p>The artist will be in touch shortly!</p>
                    </div>
                </div>
            )}
            {!bookMessage && (
                <div className={showForm ? "side-bar active" : "side-bar"}>
                    <form className="book-form">
                        <div>
                            <label>Date of Event</label>
                            <input
                                type="date"
                                min="2022-01-24"
                                max="2022-06-01"
                            />
                        </div>
                        <div>
                            <label>Your Name</label>
                            <input type="text" />
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
                            <input type="text" />
                        </div>
                        <div>
                            <label>
                                Please provide a brief description of your event
                            </label>
                            <textarea />
                        </div>
                        <button onClick={handleBooking}>Book!</button>
                    </form>
                </div>
            )}
        </>
    );
};

export default BookingSideBar;
