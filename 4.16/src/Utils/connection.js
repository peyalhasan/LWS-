
export default function createConnection(serverUrl, roomId) {
    return {
        connect: () => {
            alert(`Connected ${serverUrl} to room ${roomId}`)
        },
        disconnect: () => {
            alert(`Disconnected ${serverUrl} from room ${roomId}`)
        }
    }
}

export function logVisit(roomId){
    alert(`User visited room ${roomId}`)
}