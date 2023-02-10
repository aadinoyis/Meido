import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const Details = () => {
    const [close, setClose] = useState(true);
    
    const handleClose = e => {
        e.preventDefault();
        close ? setClose(false) : setClose(true);
    }

    return (
        <div className="frame_details">
            <div className="container">
            <div className="personal_details">
                <div className="cover">
                <img src="#" alt="image" />
                <div className="text">
                    <h3 className="user_name">John Smith</h3>
                    <p className="user_id">#1234567</p>
                    <aside>
                    {/* <!-- <button className="log_out">Log out</button> -->
                    <!-- <button className="edit"><span className="icon">+</span></button> --> */}
                    </aside>
                </div>
                </div>
            
                <div className="view_apt" onClick={e => handleClose(e)}><span> See Appointments <IoChevronDown/></span></div>

                <ul className={`appointments ${close == true && "close"}`}>
                    <li className="appointment_field">
                        <div className="date">
                        <span className="day">01/01/2021</span>
                        <span className="time">2:00 PM</span>
                        </div>
                        <div className="appointment">
                        <span className="task">Meet with Will</span>
                        <span className="reason">Follow-up visit</span>
                        </div>
                    </li>
        
                    <li className="appointment_field">
                        <div className="date">
                        <span className="day">01/15/2021</span>
                        <span className="time">9:00 AM</span>
                        </div>
                        <div className="appointment">
                        <span className="task">Meeting with Dr. Stephen</span>
                        <span className="reason">Physical therapy</span>
                        </div>
                    </li>
                    <li className="appointment_field">
                        <div className="date">
                        <span className="day">01/01/2021</span>
                        <span className="time">2:00 PM</span>
                        </div>
                        <div className="appointment">
                        <span className="task">Meet with Will</span>
                        <span className="reason">Follow-up visit</span>
                        </div>
                    </li>
        
                    <li className="appointment_field">
                        <div className="date">
                        <span className="day">01/15/2021</span>
                        <span className="time">9:00 AM</span>
                        </div>
                        <div className="appointment">
                        <span className="task">Meeting with Dr. Stephen</span>
                        <span className="reason">Physical therapy</span>
                        </div>
                    </li>
                </ul>

                <form className="bio_data">
                <div className="title_group">
                    <h3 className="title"><span className="icon"></span><span>Bio data</span></h3>
                    {/* <!-- <button className="edit">edit</button> --> */}
                </div>
                
                <main>
                    <div className="name_field">
                        <label htmlFor="name"><h4 className="sub_title">Full Name</h4></label>
                        <input type="text" name="name" id="name" disabled required value="John Smith" />
                    </div>
        
                    <div className="dob_field">
                    <label htmlFor="dob"><h4 className="sub_title">Date of Birth</h4></label>
                    <input type="date" name="dob" id="dob" disabled required value="1970-01-01" />
                    </div>

                    <div className="gender_field">
                    <label htmlFor="gender"><h4 className="sub_title">Gender</h4></label>
                    <select name="gender" id="gender" disabled required value={"Male"}>
                        <option value="Male" >Male</option>
                        <option value="Female">Female</option>
                    </select>
                    </div>

                    <div className="height_field">
                    <label htmlFor="height"><h4 className="sub_title">Height</h4></label>
                    <input type="text" name="height" id="height" disabled required value="6" />
                    </div>

                    <div className="weight_field">
                    <label htmlFor="weight"><h4 className="sub_title">Weight</h4></label>
                    <input type="text" name="weight" id="weight" disabled required value="65" />
                    </div>

                    <div className="blood_field">
                    <label htmlFor="blood"><h4 className="sub_title">Blood group</h4></label>
                    <input type="text" name="blood" id="blood" disabled required value="O" />
                    </div>
        
                    <div className="address_field">
                    <label htmlFor="address"><h4 className="sub_title">Address</h4></label>
                    <input type="text" name="address" id="address" disabled required value="123 Main St, Anytown USA" />
                    </div>
                    
                    <div className="phone_field">
                    <label htmlFor="phone"><h4 className="sub_title">Phone</h4></label>
                    <input type="tel" name="phone" id="phone" disabled required value="+234 80 1234 567" />
                    </div>
        
                    <div className="email_field">
                    <label htmlFor="email"><h4 className="sub_title">e-mail</h4></label>
                    <input type="email" name="email" id="email" disabled required value="jsmith@example.com" />
                    </div>
                </main>
                </form>
    
                <form className="insurance">
                <div className="title_group">
                    <h3 className="title"><span className="icon"></span><span>Insurance</span></h3>
                    {/* <!-- <button className="edit">edit</button> --> */}
                </div>
                
                <main>
                    <div className="company_field">
                    <label htmlFor="company"><h4 className="sub_title">Company</h4></label>
                    <input type="text" name="company" id="company" disabled required value="ABC Insurance" />
                    </div>
        
                    <div className="policy_number_field">
                    <label htmlFor="policy_number"><h4 className="sub_title">Policy Number</h4></label>
                    <input type="text" name="policy_number" id="policy_number" disabled required value="123456" />
                    </div>
        
                    <div className="policy_holder_name_field">
                    <label htmlFor="policy_holder_name"><h4 className="sub_title">Policy Holder Name</h4></label>
                    <input type="text" name="policy_holder_name" id="policy_holder_name" disabled required value="John Smith" />
                    </div>
                    
                    <div className="valid_till_field">
                    <label htmlFor="valid_till"><h4 className="sub_title">Valid till</h4></label>
                    <input type="date" name="valid_till" id="valid_till" disabled required value="2022-12-31" />
                    </div>
        
                    <div className="insurance_type_field">
                    <label htmlFor="insurance_type"><h4 className="sub_title">Insurance type</h4></label>
                    <select name="insurance_type" id="insurance_type" disabled required value={"Individual"}>
                        <option value="Individual" >Individual</option>
                        <option value="Family">Family</option>
                        <option value="Company">Company</option>
                    </select>
                    </div>
                </main>
                </form>
            </div>
            </div>
        </div>
    )
}

export default Details;