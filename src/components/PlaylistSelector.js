import React from "react";

const PlaylistSelector = ({
    onSelectedNextMusic, 
    onSelectedPreviousMusic
}) => {
    return (
        <>
        <button 
            onClick={onSelectedPreviousMusic}
        >
            Previous Music
        </button>
        <button 
            onClick={onSelectedNextMusic}
        >
            Next Music
        </button>
        </>
    )
}

export default PlaylistSelector;