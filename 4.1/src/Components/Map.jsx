import { useRef} from "react";

export default function MapComponent() {
    const itemsRef = useRef(null);
    //   const [catList, setCatList] = useState(catList);
    function getMap() {
        if (!itemsRef.current) {
            itemsRef.current = new Map();
        }
        return itemsRef.current
    }

    function scrollToCat(catId) {
        const map = getMap();
        const node = map.get(catId);
        node.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
        });
    }



    return (
        <>
            <nav>
                <button onClick={() =>scrollToCat(catList[2])}>Neo</button>
                <button onClick={() => scrollToCat(catList[5])}>Millie</button>
                <button onClick={() => scrollToCat(catList[8])}>Bella</button>
            </nav>
            <div>
                <ul>
                    {catList.map((cat) => (
                        <li
                            key={cat.id}
                            ref={(node) => {
                                const map = getMap();
                                if(node){
                                    map.set(cat.id, node)
                                }
                                else{
                                    map.delete(cat.id)
                                }
                            }}

                        >
                            <img src={cat.imageUrl} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}


const catList = [];
for (let i = 0; i < 10; i++) {
    catList.push({
        id: i,
        imageUrl: "https://placekitten.com/250/200?image=" + i,
    })
}
