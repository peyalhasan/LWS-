import { loremIpsum } from "lorem-ipsum"
import ListItem from "./Components/ListItem"

function App() {
  const rowCount = 500
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

  return (
    <div>
      <div className="App ">
        {list.map((item) => (
          <ListItem
            key={item.id}
            name={item.name}
            title={item.text}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}

export default App
