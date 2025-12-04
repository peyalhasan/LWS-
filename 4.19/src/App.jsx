import Page from "./Component/logVisit"
import shoppingCartContext from "./Context/shoppingCartContext"
function App() {
const items = [
  {
    id: crypto.randomUUID(),
    title: 'Product-1'
  }
]
  return (
    <div>
      <shoppingCartContext.Provider value={items} >

        <Page />
      </shoppingCartContext.Provider>
    </div>
  )
}

export default App
