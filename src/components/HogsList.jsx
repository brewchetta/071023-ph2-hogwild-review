import PigTile from './PigTile'

function HogsList({ hogs, filterGreased }) {
  // PROPS: hogs, filterGreased

    const filteredHogs = filterGreased === "all" ? hogs : hogs.filter(hog => hog.greased)
    // the filter here checks to see if filter is on "all"
    // if it is, filteredHogs is just the normal hogs array
    // if not we filter hogs to get the greased ones

    return (
        <div>
            { filteredHogs.map( hog => <PigTile key={hog.name} hog={hog} /> ) }

            {/* map through filteredHogs and create a PigTile for each hog */}
            {/* PigTile -> prop: hog needs to be passed in so we can render the card for it */}
            {/* anytime we map we must give a key that doesn't change and is unique */}
            {/* ideally the key would be an id but since we don't have that we'll use name */}
        </div>
    )

}

export default HogsList
