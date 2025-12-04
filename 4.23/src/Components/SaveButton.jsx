import useOnlineStatus from "../Hooks/useOnlineStatus";

const SaveButton = () => {
    const isOnline = useOnlineStatus()
    function handleSaveClick() {
        alert('Yourdata was saved!')
    }
    return (
        <button disabled={!isOnline} onClick={handleSaveClick}>
            {isOnline ? 'Save progress' : 'Reconnecting...'}
        </button>
    );
};

export default SaveButton;