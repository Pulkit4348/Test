import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Input() {
    const [text, setText] = useState("");
    const [file, setFile] = useState("");
    const [field, setField] = useState(false);

    let handleClick = () => {
        console.log(text);
        console.log(file);

        setField(true);
    }
    return (
        <div className='main'>
            <div className='input'>
                <div className='rollNo'>
                    <div>Roll No: </div>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={text} onChange={(e) => setText(e.target.value)} />
                    </Box>
                </div>
                <div className='image'>
                    <div >Image: </div>
                    <Button variant="contained" component="label">
                        Upload
                        <input hidden accept="image/*" multiple type="file" onChange={(e) => setFile(e.target.files[0])} />
                    </Button>
                </div>
                <Button variant="contained" onClick={handleClick}>Submit</Button>
            </div>
            {field && (<div>
                <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 5, width: '50ch' , size: "large"},
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </Box>
            </div>)

            }
        </div>
    )
}

export default Input