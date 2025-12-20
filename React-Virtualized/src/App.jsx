import { loremIpsum } from "lorem-ipsum"
import ListItem from "./Components/ListItem"
import { List } from "react-virtualized";

function App() {
    const rowCount = 50000;

    const listHight = 500;
    const rowHeight = 50;
    const rowWidth = 700;


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
        {
            list.map((item) => (
                <ListItem
                    key={key}
                    name={item[index].name}
                    title={item[index].text}
                    image={item[index].image}
                    style={style}
                />
            ))
        }
    }

    return (
        <div>
            <div className="App ">

                <List
                    width={rowWidth}
                    height={listHight}
                    rowHeight={rowHeight}
                    rowCount={rowCount}
                    rowRenderer={renderRow}

                />


            </div>
        </div>
    )
}

export default App
