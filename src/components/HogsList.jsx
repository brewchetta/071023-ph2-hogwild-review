import PigTile from './PigTile'

function HogsList({ hogs, filterGreased }) {

    return (
        <div>
            { hogs.map( hog => <PigTile key={hog.name} hog={hog} /> ) }
        </div>
    )

}

export default HogsList