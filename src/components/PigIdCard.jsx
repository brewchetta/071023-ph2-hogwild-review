// Purpose of this card is to show the pig image and name

function PigIdCard({ hog, details }) {
  // PROPS: hog, details

    return (
        <div hidden={!details}>
            <img src={hog.image} alt={hog.name} />
            <h3>{hog.name}</h3>

            {/* Personally would not have used the hidden attribute here */}
            {/* However there's nothing improper about using it */}
            {/* The only consideration might be that if you have important data to hide... */}
            {/* People inspecting the DOM would still be able to see it */}

        </div>
    )
}

export default PigIdCard
