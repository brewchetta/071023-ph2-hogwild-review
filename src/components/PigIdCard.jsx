function PigIdCard({ hog, details }) {
    return (
        <div hidden={!details}>
            <img src={hog.image} alt={hog.name} />
            <h3>{hog.name}</h3>
        </div>
    )
}

export default PigIdCard