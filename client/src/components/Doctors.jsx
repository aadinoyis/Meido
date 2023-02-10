import { useState } from 'react'
import { IoVideocam, IoCall, IoMail, IoSearch } from 'react-icons/io5'
// import { IoLogoDiscord } from 'react-icons/io5'
// import { IoLogoWhatsapp } from 'react-icons/io5'
// import { IoLogoTwitter } from 'react-icons/io5'

const Doctors = () => {
    const [search, setSearch] = useState('');

    const doctors = [{
        name: "Dr. Jane Doe",
        title: "Cardiosurgeon",
        image: "imageurl",
        connect: {
            video: "https://zoom.com/",
            voice: "tel:+234901234567",
            email: "mailto:doctorone@gmail.com"
        },
        available: {
            time: {
                from: "09:00AM", 
                to: "10:00PM"
            },
            day: {
                start: "Mon",
                end: "Fri"
            }
        }
    },
    {
        name: "PT Mary Smith",
        title: "Neurosurgeon",
        image: "imageurl",
        connect: {
            video: "https://meet.google.com/",
            voice: "tel:+234907654321",
            email: "mailto:doctortwo@gmail.com"
        },
        available: {
            time: {
                from: "07:00AM", 
                to: "06:00PM"
            },
            day: {
                start: "Mon",
                end: "Sat"
            }
        }
    }]

    const handleSearch = e => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    const searchNow = e => {
        e.preventDefault();
        console.log(search)
    }

    return (
        <div className="frame_doctors">
            <div className="container">
            <form className="search_doc">
                <input type="text" name="search" id="search" placeholder="search for doctor or specialist" 
                onChange={e => handleSearch(e)}
                value={search}
                />
                <button onClick={e => searchNow(e)}><IoSearch/></button>
            </form>
            
            <ul className="doctors">
                {doctors.map(doctor => {
                    return (
                        <li className="doctor" key={Math.random()}>
                            <img src={doctor.image} alt="img" className="image"/>
                            <div className="detail">
                                <span className="name">{doctor.name}</span>
                                <span className="title">{doctor.title}</span>
                            </div>
                            <div className="connect">
                                <span>connect</span>
                                <ul>
                                    <li><a href={doctor.connect.video} className="icon"><IoVideocam/></a></li>
                                    <li><a href={doctor.connect.voice} className="icon"><IoCall/></a></li>
                                    <li><a href={doctor.connect.email} className="icon"><IoMail/></a></li>
                                </ul>
                                <span className='available'>
                                    {doctor.available.time.from} - {doctor.available.time.to} <br />
                                    {doctor.available.day.start} - {doctor.available.day.end}
                                </span>
                            </div>
                        </li>
                    )
                })}
            </ul>
            <span>Please note these are not real doctors!</span>
            </div>
        </div>
    )
}

export default Doctors;