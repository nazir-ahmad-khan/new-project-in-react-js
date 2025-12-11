
import { IoCloseCircleOutline } from "react-icons/io5";
import '../Popup/ModelContent.css';


function ModelContent({onClose}) {
    return (
        <>
            <div className='popup-overlay' >
                <div className="popup-box">

                    <h2 >Contact Us</h2>
                    <p >Please write your message and contact information below. We will respond as soon as possible.</p>

                    <form >
                        <input type="email" placeholder="Enter your email" />

                        <input type="text" placeholder="Enter your phone number" />

                        <textarea placeholder="Type your message here!"></textarea>

                        <label className='form-check'>
                            <input type="checkbox" className='form-check-box' />
                            <span className="form-check-text">I confirm that I've read and agree to <u>Privacy Policy</u>.</span>
                        </label>

                        <button type="submit" className='formbtn'> Submit </button>
                    <p >Remind me later</p>
                    </form>
                <button className="closs-btn" onClick={onClose}><IoCloseCircleOutline/></button>
                </div>
            </div>
        </>
    )
}
export default ModelContent;