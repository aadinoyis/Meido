const Reports = () => {
    return (
        <div className="frame_reports">
            <div className="container">
            <div className="medical_reports">
                <div className="conditions">

                <div className="title_group">
                    <h3 className="title"><span className="icon"></span><span>Conditions</span></h3>
                    <button className="see_more">See more</button>
                </div>

                <ul>
                    <li className="condition_field">
                    <div className="condtion">
                        <span className="sub_title">Condition</span>
                        <span className="title">Asthma</span>
                    </div>
                    <div className="diagnosed">
                        <span className="sub_title">Diagnosed</span>
                        <span className="title">01/01/1980</span>
                    </div>
                    </li>

                    <li className="condition_field">
                    <div className="condtion">
                        <span className="sub_title">Condition</span>
                        <span className="title">High Blood Pressure</span>
                    </div>
                    <div className="diagnosed">
                        <span className="sub_title">Diagnosed</span>
                        <span className="title">01/01/1990</span>
                    </div>
                    </li>
                </ul>
                </div>

                <div className="surgeries">
                <div className="title_group">
                    <h3 className="title"><span className="icon"></span><span>Surgeries</span></h3>
                    <button className="see_more">See more</button>
                </div>

                <ul>
                    <li className="surgery_field">
                    <div className="surgery">
                        <span className="sub_title">Surgery</span>
                        <span className="title">Appendectomy</span>
                    </div>
                    <div className="date">
                        <span className="sub_title">Date</span>
                        <span className="title">01/01/2000</span>
                    </div>
                    </li>

                    <li className="surgery_field">
                    <div className="surgery">
                        <span className="sub_title">Surgery</span>
                        <span className="title">Cataract surgery</span>
                    </div>
                    <div className="date">
                        <span className="sub_title">Date</span>
                        <span className="title">01/01/2010</span>
                    </div>
                    </li>
                </ul>
                </div>

                <div className="allergies">
                <div className="title_group">
                    <h3 className="title"><span className="icon"></span><span>Allergies</span></h3>
                    <button className="see_more">See more</button>
                </div>

                <ul>
                    <li className="title">Penicillin</li>
                    <li className="title">Sulfa drugs</li>
                </ul>
                </div>

                <div className="test_results">
                <div className="title_group">
                    <h3 className="title"><span className="icon"></span><span>Test results</span></h3>
                    <button className="see_more">See more</button>
                </div>

                <ul>
                    <li className="test_field">
                    <div className="test">
                        <span className="sub_title">Test</span>
                        <span className="title">Chest X-ray</span>
                    </div>
                    <div className="date">
                        <span className="sub_title">Date</span>
                        <span className="title">01/01/2021</span>
                    </div>
                    <div className="results">
                        <span className="sub_title">Result</span>
                        <span className="title">Normal</span>
                    </div>
                    </li>

                    <li className="test_field">
                    <div className="test">
                        <span className="sub_title">Test</span>
                        <span className="title">Blood test</span>
                    </div>
                    <div className="date">
                        <span className="sub_title">Date</span>
                        <span className="title">01/01/2021</span>
                    </div>
                    <div className="results">
                        <span className="sub_title">Result</span>
                        <span className="title">hemoglobin: "14.2 g/dL", white_blood_cells: "5.3 K/uL"</span>
                    </div>
                    </li>
                </ul>
                </div>

                <div className="treatments">
                <div className="title_group">
                    <h3 className="title"><span className="icon"></span><span>Treatments</span></h3>
                    <button className="see_more">See more</button>
                </div>

                <ul>
                    <li className="treatment_field medication">
                    <div className="treatment">
                        <span className="sub_title">Medication</span>
                        <span className="title">Metformin</span>
                    </div>
                    <div className="dose">
                        <span className="sub_title">Dose</span>
                        <span className="title">500 mg</span>
                    </div>
                    <div className="route">
                        <span className="sub_title">Route</span>
                        <span className="title">Oral</span>
                    </div>
                    <div className="frequency">
                        <span className="sub_title">Frequency</span>
                        <span className="title">Twice daily</span>
                    </div>
                    </li>
                    
                    <li className="treatment_field">
                    <div className="treatment">
                        <span className="sub_title">Treatment</span>
                        <span className="title">Physical therapy</span>
                    </div>
                    <div className="frequency">
                        <span className="sub_title">Plan</span>
                        <span className="title">3 times per week for 6 weeks</span>
                    </div>
                    </li>
                </ul>
                </div>

                <div className="notes">
                <div className="title_group">
                    <h3 className="title"><span className="icon"></span><span>Notes</span></h3>
                    <button className="see_more">See more</button>
                </div>

                <ul>
                    <li className="note_field">
                    <div className="note">
                        <span className="sub_title">Note</span>
                        <span className="title">Patient reports feeling well. No new symptoms.</span>
                    </div>
                    <div className="date">
                        <span className="sub_title">Date</span>
                        <span className="title">01/01/2021</span>
                    </div>
                    <div className="reason">
                        <span className="sub_title">Provider</span>
                        <span className="title">Dr. Jane Doe</span>
                    </div>
                    </li>

                    <li className="note_field">
                    <div className="note">
                        <span className="sub_title">Note</span>
                        <span className="title">Patient has made good progress with physical therapy exercises.</span>
                    </div>
                    <div className="date">
                        <span className="sub_title">Date</span>
                        <span className="title">01/15/2021</span>
                    </div>
                    <div className="reason">
                        <span className="sub_title">Provider</span>
                        <span className="title">PT Mary Smith</span>
                    </div>
                    </li>
                </ul>

                </div>
            </div>
            </div>
        </div>
    )
}

export default Reports;