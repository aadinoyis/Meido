import Bot from './Bot'
import Doctors from './Doctors'
import Map from './Map'
import { Routes, Route } from 'react-router-dom'

const Pages = () => {
    return(
        <Routes>
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/' element={<Bot />} />
            <Route path='/map' element={<Map />} />
        </Routes>
    )
}

export default Pages;