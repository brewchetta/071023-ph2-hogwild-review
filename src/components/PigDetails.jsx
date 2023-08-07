// Purpose of this card is to show all the details for the pig

function PigDetails({ details, hog }) {
  // PROPS: details, hog

    return (
        <ul hidden={details}>
            <li>Specialty: {hog.specialty}</li>
            <li>{hog.weight} lbs</li>
            <li>{hog.greased ? "Greased" : "Ungreased"}</li>
            <li>{ hog["highest medal achieved"] }</li>
            {/* because "highest medal achieved" can't be called with dot notation...
            we have to use bracket notation to get the info */}
        </ul>
    )

}

export default PigDetails
