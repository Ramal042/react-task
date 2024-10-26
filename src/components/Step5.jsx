import { useState } from 'react';
import useFormStore from './store';

export default function Form5() {
    const {
        nextPhase,
        previousPhase,
    } = useFormStore();


    const [sms, setSms] = useState("");
    const [authenticatorApp, setAuthenticatorApp] = useState("");

    
    const handleStep5Submit = (e) => {
        e.preventDefault();
        if (!sms || !authenticatorApp) {
            alert("Please fill in all required fields.");
            return;
        }
        nextPhase();
    };

    return(
        <>
         <form onSubmit={handleStep5Submit} className='inputs'>
                    <h2>Keep your account secure</h2>
                    <input
                        type="text"
                        placeholder='Use SMS'
                        value={sms}
                        onChange={(e) => setSms(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder='Use an authenticator app'
                        value={authenticatorApp}
                        onChange={(e) => setAuthenticatorApp(e.target.value)}
                    />
                    <br />
                    <div className='btn'>
                        <button type="button" onClick={previousPhase} style={buttonStyle}>
                            Back to Step 4
                        </button>
                        <br />
                        <button type="submit" style={buttonStyle}>
                            Continue to Step 6
                        </button>
                    </div>
                </form>
        </>
    )
}


const buttonStyle = {
    width: '295px',
    background: 'rgb(74, 58, 255)',
    border: '1px solid rgb(74, 58, 255)',
    color: 'white',
    borderRadius: '5px',
    height: '30px',
};