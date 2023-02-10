import { useEffect, useState } from "react";
import { IoAdd, IoApps, IoClose } from "react-icons/io5";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../../firebase-config';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";

const SignedIn = ({closeUser, googleSignOut, userName, userId}) => {
    return (
        <div className={`action ${closeUser == true && "close"}`}>
            <span className="user_name">{userName}</span>
            <span className="user_id">{userId}</span>
            <button className="log_out" onClick={googleSignOut}>Sign out</button>
        </div>
    )
}

const SignedOut = ({closeUser, googleSignIn}) => {
    return (
        <div className={`action ${closeUser == true && "close"}`}>
            <button className="user_sign_in" onClick={googleSignIn}>Google</button>
            <span className="sign_in">Sign in</span>
        </div>
    )
}

const Header = () => {
    const [closeNav, setCloseNav] = useState(true);
    const [closeUser, setCloseUser] = useState(true);
    const [isSignedIn, setisSignedIn] = useState(false);
    const [user, setUser] = useState([]);
    
    const toggleCloseNav = e => {
        e.preventDefault();
        closeNav ? setCloseNav(false) : setCloseNav(true);
    }

    const toggleCloseUser = e => {
        e.preventDefault();
        closeUser ? setCloseUser(false) : setCloseUser(true);
    }

    // Initialize Google auth
    const googleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const newUser = result.user;
        localStorage.setItem("MEIDO_USER", JSON.stringify(newUser));
        setUser(newUser);
        setisSignedIn(true)
        })
        .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    const googleSignOut = () => {
        auth.signOut();
        localStorage.removeItem("MEIDO_USER");
        setisSignedIn(false);
    }

    useEffect(() => {
        const meidoUser = localStorage.getItem('MEIDO_USER');

        if (meidoUser) {
            setUser(JSON.parse(meidoUser));
            setisSignedIn(true);
            console.log(user);
        } else {
            setisSignedIn(false)
        }
    }, [isSignedIn])

    return (
        <header>
            <main className="menu">
            <div className="toggle" onClick={e => toggleCloseNav(e)}><IoApps/></div>

            <div className="logo">Meido</div>

            <div className="user">
                <div className="img" onClick={e => toggleCloseUser(e)}>
                    {
                        isSignedIn && (<img src={user.photoURL}  alt="" />)
                    }
                    
                </div>

                {
                    isSignedIn ?
                    <SignedIn closeUser={closeUser} googleSignOut={googleSignOut} 
                    userName={user.displayName} userId={user.uid} />
                    :
                    <SignedOut closeUser={closeUser} googleSignIn={googleSignIn} />
                }
                
                
            </div>
            </main>

            <aside className={`${closeNav ? "close" : ""}`}>
                <nav>
                    <div className="toggle" onClick={e => toggleCloseNav(e)}><IoClose/></div>
                    <ul className="side_nav">
                        <li><a href="#">
                            <span className="large_icon"><IoAdd/></span>
                            <span className="title">Medical report</span></a>
                        </li>
                        <li><a href="#">
                            <span className="large_icon"><IoAdd/></span>
                            <span className="title">Insurance</span></a>
                        </li>
                    </ul>
                    <ul className="version">
                        <li>Meido App v1.0.0</li>
                        <li>Made by <a href="mailto:abdulwahabadinoyis@gmail.com">aadinoyis</a></li>
                    </ul>
                </nav>
            </aside>
        </header>
    )
}

export default Header;