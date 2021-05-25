import React from "react";

const PlaylistDetails = ({play, loaded}) => {
    if (!loaded) {
        return <p>Loading</p>
    }
    return (
        <>
            <h3>this {play.feed.entry["im:name"].label}</h3>
            <p>Music name: </p>
        </>
    )
}

export default PlaylistDetails;