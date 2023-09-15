import { InputLabel } from '@mui/material';
import { Input } from '@mui/material'
import React from 'react'
import css from './FileUpload.module.css'
export default function FileUpload({file,setFile}) {
  return (
    <div>
      <InputLabel color='primary' variant='contained' sx={{mb:1}} htmlFor='file' >Upload File</InputLabel>
      <Input type='file'
      accept='.doc, .docx, .xls, .xlsx, application/pdf'
      name='file'
      id='file'
      multiple={false}
      // value={file}
      onChange={(e) => {
        console.log(e.target.files);
        setFile(e.target.files[0])
      }}
      />
    </div>
  )
}
