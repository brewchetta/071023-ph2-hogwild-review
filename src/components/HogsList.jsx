import PigTile from './PigTile'

function HogsList({ hogs, filterGreased, sortBy }) {
    // PROPS: hogs, filterGreased, sortBy

    const filteredHogs = filterGreased === "all" ? hogs : hogs.filter(hog => hog.greased)
    // the filter here checks to see if filter is on "all"
    // if it is, filteredHogs is just the normal hogs array
    // if not we filter hogs to get the greased ones

    const filteredSortedHogs = (
      sortBy === "name" ? [...filteredHogs].sort((hog1,hog2) => hog1.name > hog2.name) :
      sortBy === "weight" ? [...filteredHogs].sort((hog1,hog2) => hog1.weight > hog2.weight) :
      filteredHogs
    )
    // sortedHogs will check to see the value of sortBy
    // if sortBy is name we run the sort functionality by name
    // if sortBy is weight we run the sort functionality by weight
    // if sortBy is none we return our filteredHogs array
    // the filteredSortedHogs is the ultimate result we'll map through

    // in order for this to work we MUST make a copy of the filteredHogs array
    // otherwise it notices it's the same array and doesn't trigger a rerender
    // (this is a react optimization strategy that can be annoying if you're trying to sort)

    // best practice note: the filters and sorts happen everytime state changes
    // to optimize we might memoize this process to avoid running through it every time


    return (
      <div>
            { filteredSortedHogs.map( hog => <PigTile key={hog.name} hog={hog} /> ) }

            {/* map through filteredSortedHogs and create a PigTile for each hog */}
            {/* PigTile -> prop: hog needs to be passed in so we can render the card for it */}
            {/* anytime we map we must give a key that doesn't change and is unique */}
            {/* ideally the key would be an id but since we don't have that we'll use name */}
        </div>
    )

}

export default HogsList
