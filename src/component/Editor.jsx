import { useEffect } from 'react';


import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import { Box } from '@mui/material';


const Editor = () =>{

    useEffect(()=>{
        const quillserver = new Quill('#container', { 
            theme: 'snow' 
        })
    }, [])

    return(
        <Box id="container"></Box>
    )
}

export default Editor;