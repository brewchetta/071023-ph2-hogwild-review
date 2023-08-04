import PigDetails from './PigDetails'
import PigIdCard from './PigIdCard'
import { useState } from 'react'

function PigTile({hog}) {

    const [details, setDetails] = useState(true)

    console.hog( hog )

    function handleToggleDetails() {
        setDetails( !details )
    }

    return (
        <div onClick={ handleToggleDetails } className="pigTile">
            <PigDetails hog={hog} details={details} />
            <PigIdCard hog={hog} details={details} />
        </div>
    )

}

export default PigTile