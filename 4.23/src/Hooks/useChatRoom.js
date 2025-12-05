import {
    useEffect,
    useEffectEvent,
} from "react";
import { createConnection } from "../Utils/Chat";

export function useChatRoom({ serverUrl, roomId, onReceiveMessage }) {
    const onMessage = useEffectEvent(onReceiveMessage);

    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomId: roomId,
        };
        const connection = createConnection(options);
        connection.connect();
        connection.on("message", onMessage);
        return () => connection.disconnect();
    }, [roomId, serverUrl]);
}