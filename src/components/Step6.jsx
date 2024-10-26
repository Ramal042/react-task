
import useFormStore from './store';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

export default function Form6() {
    const {
        businessAddress,
        setBusinessAddress,
        previousPhase,
    } = useFormStore();
    
    
    const handleStep6Submit = (e) => {
        e.preventDefault();
        console.log("Business address submitted!");
    };
    return(
        <>
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
