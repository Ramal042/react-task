import { useState } from 'react';
import useFormStore from './store';

export default function Form3() {
    const {
        nextPhase,
        previousPhase,
    } = useFormStore();

    const [vat, setVat] = useState("");
    const [industry, setIndustry] = useState("");
    const [website, setWebsite] = useState("");
    

    const handleStep3Submit = (e) => {
        e.preventDefault();
        if (!vat || !industry || !website) {
            alert("Please fill in all required fields.");
            return;
        }
        nextPhase();
    };

    return(
        <>
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
