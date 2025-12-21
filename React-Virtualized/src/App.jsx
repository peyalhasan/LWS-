import { loremIpsum } from "lorem-ipsum"
import ListItem from "./Components/ListItem";
import { List , AutoSizer } from "react-virtualized";


function Apps() {
    const rowCount = 1000022;

    const rowHeight = 80;


    const list = Array(rowCount)
        .fill()
        .map((val, id) => {

            return {
                id,
                name: 'Peyal Hasan',
                image: "https://placehold.co/40",
                text: loremIpsum({
                    count: 1,
                    units: 'sentences',
                    sentenceLowerBound: 4,
                    sentenceUpperBound: 8,
                })
            }
        })


    function renderRow({ index, key, style }) {

        return (
            < ListItem
                key={key}
                name={list[index].name}
                title={list[index].text}
                image={list[index].image}
                style={style}
            />
        )
    }

    return (
        <div className="App">
            <div className="list ">
                <AutoSizer>
                    {({width, height}) =>(
                <List
                    width={width}
                    height={height}
                    rowHeight={rowHeight}
                    rowCount={rowCount}
                    rowRenderer={renderRow}
                    overscanColumnCount={5}
                />
                    )}
                </AutoSizer>


            </div>
        </div>
    )
}

export default Apps
