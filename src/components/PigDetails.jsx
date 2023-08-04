function PigDetails({ details, hog }) {

    return (
        <ul hidden={details}>
            <li>Specialty: {hog.specialty}</li>
            <li>{hog.weight} lbs</li>
            <li>{hog.greased ? "Greased" : "Ungreased"}</li>
            <li>{ hog["highest medal achieved"] }</li>
        </ul>
    )

}

export default PigDetails