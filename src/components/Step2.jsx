import { useState } from 'react';
import useFormStore from './store';

export default function Form2() {
    const {
        formPhase,
        addressLine1,
        addressLine2,
        city,
        setAddressLine1,
        setAddressLine2,
        setCity,
        nextPhase,
        previousPhase,
    } = useFormStore();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [vat, setVat] = useState("");
    const [industry, setIndustry] = useState("");
    const [website, setWebsite] = useState("");

    const handleStep2Submit = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email) {
            alert("Please fill in all required fields.");
            return;
        }
        nextPhase();
    };

    return (
        <>
            {formPhase === 2 && (
                <form onSubmit={handleStep2Submit} className='inputs'>
                    <h2>Name</h2>
                    <div className='name'>
                        <input
                            type="text"
                            placeholder='First name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Last name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <h2>Email</h2>
                    <input
                        type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder='Address line 1'
                        value={addressLine1}
                        onChange={(e) => setAddressLine1(e.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder='Address line 2'
                        value={addressLine2}
                        onChange={(e) => setAddressLine2(e.target.value)}
                    />
                    <br />
                    <input
                        type="text"
                        placeholder='City'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <br />
                    <div className='btn'>
                        <button type="button" onClick={previousPhase} style={buttonStyle}>
                            Back to Step 1
                        </button>
                        <br />
                        <button type="submit" style={buttonStyle}>
                            Continue to Step 3
                        </button>
                    </div>
                </form>
            )}


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
