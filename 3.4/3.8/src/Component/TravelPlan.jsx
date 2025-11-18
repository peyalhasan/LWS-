
import { useState } from "react";
import { initialTravelPlan } from "../data/placesNormalized";
import PlaceTree from "./PlaceTree";

const TravelPlan = () => {
    const [plan, setPlan] = useState(initialTravelPlan);

    const root = plan[0]
    
    const planetIds = root.childIds

    const handleComplete = (parentId, childId) =>{
        const parent = plan[parentId]
        const nextParent = {
            ...parent,
            childIds: parent.childIds.filter(id => id !== childId )
        }
        setPlan({
            ...plan, 
            [parentId]: nextParent,
        })
    }

    return (
        <div>
            <h2>Places to Visit</h2>
            {
                planetIds.map((placeId)=> 
                <PlaceTree key={placeId} id={placeId} placesById={plan} onComplete ={handleComplete}
                parentId={0} /> )
            }
        </div>
    );
};

export default TravelPlan;