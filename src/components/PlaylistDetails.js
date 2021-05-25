import React from "react";

const PlaylistDetails = ({play, loaded}) => {
    if (!loaded) {
        return <p>Loading</p>
    }
    return (
        <>
            <h3>this {play}</h3>
            <p>Music name: </p>
        </>
    )
}

export default PlaylistDetails;