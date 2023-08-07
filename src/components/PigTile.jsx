import PigDetails from './PigDetails'
import PigIdCard from './PigIdCard'
import { useState } from 'react'

function PigTile({hog}) {
    // PROPS: hog

    const [details, setDetails] = useState(true)

    function handleToggleDetails() {
        setDetails( !details )
        // the details state gets toggled on or off to show or hide the details
    }

    return (
        <div onClick={ handleToggleDetails } className="pigTile">

            <PigDetails hog={hog} details={details} />
            <PigIdCard hog={hog} details={details} />

            {/* Both cards need to know about the hog to display info */}
            {/* Both cards need to know the details state so they know whether to display */}

            {/* We split this card up so it shows one component or the other */}
            {/* depending on the details state */}

            {/* Personally would have made this area a ternary to show one */}
            {/* component or the other instead of the hidden attributte */}

        </div>
    )

}

export default PigTile
