import { useEffect } from 'react';
import { useState } from 'react'
import { IoAdd, IoChatbox, IoClose, IoPulse } from 'react-icons/io5';

const Diagnosing = ({status}) => {
    return(
        <div className={`diagnosing ${status == true && "close"}`}>
            <span className="icon"><IoPulse/></span><span className="text">Diagnosing...</span>
        </div>
    )
}

const NewInquiry = ({toggle}) => {
    return(
        <div className="inquire" onClick={toggle}><span className="icon"><IoAdd/></span><span className="text">New Inquiry?</span></div>
    )
}

const Askbot = ({handle, chat, status, toggle, diagnose}) => {
    return (
        <div className={`chat ${status == true && "close"}`}>
            <div className="closeBtn" onClick={toggle}><IoClose/></div>

            <div className="text">
                <span className="logo">M</span>
                <h3>Health Inquiry</h3>
                <p>Inquire about your current health condition based on your symptoms and our AI will diagnose you</p>
            </div>

            <form>
                <textarea name="inquiry" id="inquiry" cols="1" rows="1" placeholder="Type here"
                onChange={handle}
                value={chat}
                ></textarea>
                <button className="btn icn"
                onClick={diagnose}
                ><span className="icon">Ask</span></button>
            </form>
        </div>
    )
}

const Bot = () => {
    const [chat, setChat] = useState('');
    const [diagnose, setDiagnose] = useState('');
    const [close, setClose] = useState(false);
    const [request, setRequest] = useState(false);
    const [requested, setRequested] = useState(false);

    const handleClose = e => {
        e.preventDefault();
        setClose(true);
    }

    const handleRequest = e => {
        e.preventDefault();
        setRequest(false);
        setClose(false);
    }

    const handleSearch = e => {
        e.preventDefault();
        setChat(e.target.value)
    }

    const requestDiagnosis = async (e) => {
        e.preventDefault();
        setRequested(false);
        setRequest(true);
        const newDiagnosis = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                issue: chat,
            })
        }

        await fetch('https://meido.onrender.com/bot', newDiagnosis) 
        .then(response => response.json())
        .then(data => {
            setDiagnose(data.diagnosis);
            setRequested(true);
        })
        .catch(error => {
            // console.error(error);
            setDiagnose('Sorry! there was a problem connecting to the server.');
            setRequested(true);
        });
    }

    return (
        <div className="frame_bot" >
            <div className="container">
            {/* <!-- The bot should have an animated vector background of an ai --> */}
            <div className="response">
                <div className="text">
                    <h3><span className="icon"><IoChatbox/></span> <span>Diagnosis</span></h3>
                    <p>This is your health diagnosis from our AI</p>
                </div>

                <div className="diagnosis">
                    <p>{diagnose}</p>
                </div>
                <NewInquiry toggle={e => handleRequest(e)}/>
            </div>

            {
            request ? 
            <Diagnosing status={requested}/>
            :
            <Askbot toggle={e => handleClose(e)} handle={e => handleSearch(e)} diagnose={e => requestDiagnosis(e)} chat={chat} status={close}/>
            }

            {/* <!-- The text will be type inside here and send a fetch request to chatGPT api --> */}

            </div>
        </div>
    )
}

export default Bot;