import { useState } from 'react';
import useFormStore from './store';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function Form() {
    const {
        formPhase,
        businessAddress,
        businessType,
        addressLine1,
        addressLine2,
        city,
        zip,
        setBusinessAddress,
        setBusinessType,
        setAddressLine1,
        setAddressLine2,
        setCity,
        setZip,
        nextPhase,
        previousPhase,
    } = useFormStore();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [vat, setVat] = useState("");
    const [industry, setIndustry] = useState("");
    const [website, setWebsite] = useState("");

    const [currency, setCurrency] = useState("");
    const [bankCountry, setBankCountry] = useState("");
    const [iban, setIban] = useState("");
    const [ibanConfirm, setIbanConfirm] = useState("");

    const [sms, setSms] = useState("");
    const [authenticatorApp, setAuthenticatorApp] = useState("");

    const handleStep1Submit = (e) => {
        e.preventDefault();
        if (!businessAddress || !businessType || !addressLine1 || !city || !zip) {
            alert("Please fill in all required fields.");
            return;
        }
        nextPhase();
    };

    const handleStep2Submit = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email) {
            alert("Please fill in all required fields.");
            return;
        }
        nextPhase();
    };

    const handleStep3Submit = (e) => {
        e.preventDefault();
        if (!vat || !industry || !website) {
            alert("Please fill in all required fields.");
            return;
        }
        nextPhase();
    };

    const handleStep4Submit = (e) => {
        e.preventDefault();
        if (!currency || !bankCountry || !iban || iban !== ibanConfirm) {
            alert("Please fill in all required fields and ensure IBANs match.");
            return;
        }
        nextPhase();
    };

    const handleStep5Submit = (e) => {
        e.preventDefault();
        if (!sms || !authenticatorApp) {
            alert("Please fill in all required fields.");
            return;
        }
        nextPhase(); 
    };

    const handleStep6Submit = (e) => {
        e.preventDefault();
        console.log("Business address submitted!");
    };

    return (
        <div className="divs">
            <div className="container">
                <h1 className='h1'>1</h1>
                <h1 className='h1'>2</h1>
                <h1 className='h1'>3</h1>
                <h1 className='h1'>4</h1>
            </div>
            <div className="texts">
                <h2>Business structure</h2>
                <h2>Bank details</h2>
                <h2>2-step authentication</h2>
                <h2>Overview</h2>
            </div>

            {formPhase === 1 && (
                <form onSubmit={handleStep1Submit} className='inputs'>
                    <h2>Business Address</h2>
                    <TextField
                        style={{ width: '300px' }}
                        select
                        label="Registered business address"
                        value={businessAddress}
                        onChange={(e) => setBusinessAddress(e.target.value)}
                    >
                        <MenuItem value="Address1">Address 1</MenuItem>
                        <MenuItem value="Address2">Address 2</MenuItem>
                        <MenuItem value="Address3">Address 3</MenuItem>
                    </TextField>
                    <br />
                    <TextField
                        style={{ width: '300px' }}
                        select
                        label="Type of business"
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                    >
                        <MenuItem value="LLC">LLC</MenuItem>
                        <MenuItem value="Corporation">Corporation</MenuItem>
                        <MenuItem value="Sole Proprietor">Sole Proprietor</MenuItem>
                    </TextField>
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
                    <input 
                        type="text" 
                        placeholder='Zip' 
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                    />
                    <br />
                    <button type="submit" style={buttonStyle}>
                        Continue to Step 2
                    </button>
                </form>
            )}

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

            {formPhase === 3 && (
                <form onSubmit={handleStep3Submit} className='inputs'>
                    <h2>VAT</h2>
                    <input 
                        type="text" 
                        placeholder='VAT number' 
                        value={vat}
                        onChange={(e) => setVat(e.target.value)}
                    />
                    <h2>Industry</h2>
                    <input 
                        type="text" 
                        placeholder='Industry...' 
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                    />
                    <h2>Organization Website</h2>
                    <input 
                        type="text" 
                        placeholder='www.example.com' 
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                    <br />
                    <div className='btn'>
                        <button type="button" onClick={previousPhase} style={buttonStyle}>
                            Back to Step 2
                        </button>
                        <br />
                        <button type="submit" style={buttonStyle}>
                            Continue to Step 4
                        </button>
                    </div>
                </form>
            )}

            {formPhase === 4 && (
                <form onSubmit={handleStep4Submit} className='inputs'>
                    <h2>Currency</h2>
                    <TextField
                        style={{ width: '300px' }}
                        select
                        label="Select your currency..."
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem value="EUR">EUR</MenuItem>
                        <MenuItem value="USD">USD</MenuItem>
                        <MenuItem value="GBP">GBP</MenuItem>
                    </TextField>
                    <h2>Bank Country</h2>
                    <TextField
                        style={{ width: '300px' }}
                        select
                        label="Select your bank country..."
                        value={bankCountry}
                        onChange={(e) => setBankCountry(e.target.value)}
                    >
                        <MenuItem value="Germany">Germany</MenuItem>
                        <MenuItem value="UK">UK</MenuItem>
                        <MenuItem value="USA">USA</MenuItem>
                    </TextField>
                    <h2>IBAN</h2>
                    <input 
                        type="text" 
                        placeholder='Your IBAN' 
                        value={iban}
                        onChange={(e) => setIban(e.target.value)}
                    />
                    <br />
                    <input 
                        type="text" 
                        placeholder='Confirm your IBAN' 
                        value={ibanConfirm}
                        onChange={(e) => setIbanConfirm(e.target.value)}
                    />
                    <br />
                    <div className='btn'>
                        <button type="button" onClick={previousPhase} style={buttonStyle}>
                            Back to Step 3
                        </button>
                        <br />
                        <button type="submit" style={buttonStyle}>
                            Continue to Step 5
                        </button>
                    </div>
                </form>
            )}

            {formPhase === 5 && (
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
            )}

            {formPhase === 6 && (
                <form onSubmit={handleStep6Submit} className='inputs'>
                    <h2>Business Address Confirmation</h2>
                    <TextField
                        style={{ width: '300px' }}
                        select
                        label="Confirm registered business address"
                        value={businessAddress}
                        onChange={(e) => setBusinessAddress(e.target.value)}
                    >
                        <MenuItem value="Address1">Address 1</MenuItem>
                        <MenuItem value="Address2">Address 2</MenuItem>
                        <MenuItem value="Address3">Address 3</MenuItem>
                    </TextField>
                    <br />
                    <div className='btn'>
                        <button type="button" onClick={previousPhase} style={buttonStyle}>
                            Back to Step 5
                        </button>
                        <br />
                        <button type="submit" style={buttonStyle}>
                            Submit
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}

const buttonStyle = {
    width: '295px',
    background: 'rgb(74, 58, 255)',
    border: '1px solid rgb(74, 58, 255)',
    color: 'white',
    borderRadius: '5px',
    height: '30px',
};
