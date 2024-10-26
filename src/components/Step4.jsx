import { useState } from 'react';
import useFormStore from './store';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function Form4() {
    const {
        nextPhase,
        previousPhase,
    } = useFormStore();

    const [currency, setCurrency] = useState("");
    const [bankCountry, setBankCountry] = useState("");
    const [iban, setIban] = useState("");
    const [ibanConfirm, setIbanConfirm] = useState("");

    
    const handleStep4Submit = (e) => {
        e.preventDefault();
        if (!currency || !bankCountry || !iban || iban !== ibanConfirm) {
            alert("Please fill in all required fields and ensure IBANs match.");
            return;
        }
        nextPhase();
    };

    return(
        <>
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
