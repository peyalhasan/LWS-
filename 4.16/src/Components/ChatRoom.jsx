import { useEffect } from "react";
import createConnection from "../Utils/connection";

const serverUrl = 'http://localhost:5173';

const ChatRoom = ({roomId}) => {

    useEffect(()=>{

        // synchronize with external chat server
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        
        // cleanup
        return() => {
            connection.disconnect();
        }

    }, [roomId])


    return (
        <div>
            Welcome to the travel room!
        </div>
    );
};

export default ChatRoom;