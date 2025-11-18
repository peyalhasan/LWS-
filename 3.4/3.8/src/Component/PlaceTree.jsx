import React from 'react';

const PlaceTree = ({id, placesById, onComplete, parentId}) => {
    const place = placesById[id]
    const childIds = place.childIds
    return (
        <div>
            <li> {place.title} <button 
            onClick={()=>onComplete(parentId, id )}
            >Complete</button>
            {
                childIds.length > 0 && (
                    <ol>
                        {
                            childIds.map(childId => <PlaceTree key={childId} id={childId} 
                            placesById={placesById}  onComplete={onComplete}
                            parentId={id}
                             /> )
                        }
                    </ol>
                )
            }
            </li>
        </div>
    );
};

export default PlaceTree;