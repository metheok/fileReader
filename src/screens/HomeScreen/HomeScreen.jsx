import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import FileUpload from '../../components/FileUpload/FileUpload'
import css from './HomeScreen.module.css'
import Results from '../../components/Results/Results'

export default function HomeScreen() {
  const [searchText,setSearchText] = React.useState('')
  const [file,setFile]  = React.useState(null)
  const OnReset = () => {
      setFile(null)
      setSearchText('')
  }
  return (
    <div  style={{width:"100%"}} >

        <Topbar searchText={searchText} setSearchText={setSearchText} OnReset={OnReset} />
        <div className={css.container} >
            <FileUpload file={file} setFile={setFile} />
          <Results searchText={searchText}  />
        </div>
       
    </div>
  )
}
