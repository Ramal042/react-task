import useFormStore from './store';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Form2 from './Step2';
import Form3 from './Step3';
import Form4 from './Step4';
import Form5 from './Step5';
import Form6 from './Step6';

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
    } = useFormStore();


    const handleStep1Submit = (e) => {
        e.preventDefault();
        if (!businessAddress || !businessType || !addressLine1 || !city || !zip) {
            alert("Please fill in all required fields.");
            return;
        }
        nextPhase();
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

            {formPhase === 2 &&
                <Form2 />
            }

            {formPhase === 3 &&
                <Form3 />
            }

            {formPhase === 4 &&
                <Form4 />
            }

            {formPhase === 5 && 
               <Form5 />
            }

            {formPhase === 6 && 
                <Form6 />
            }
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
