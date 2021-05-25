import React, {useEffect, useState} from "react";

import PlaylistSelector from "../components/PlaylistSelector"
import PlaylistDetails from "../components/PlaylistDetails";

const PlaylistContainer = () => {

    const [play, setPlay] = useState({});
    const [selectedPlayId, setSelectedPlayId] = useState();
    const [loaded, setLoaded] = useState(false);

    const getPlay = () => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json/${selectedPlayId}`)
        .then(res => res.json())
        .then(data => setPlay(data))
        .then(() => setLoaded(true))
    }

    const nextSelectedMusic = () => {
        const nextPlayId = selectedPlayId + 1;
        if (nextPlayId <= 20){
            setSelectedPlayId(nextPlayId);
        }
    }

    const previousSelectedMusic = () => {
        const previousPlayId = selectedPlayId - 1;
        if (previousPlayId >= 1){
            setSelectedPlayId(previousPlayId);
        }
    }

    useEffect(() => {
        getPlay();
    }, [selectedPlayId])

    return (
        <>
            <h1>20 Best Songs Now</h1>
            <PlaylistSelector
                onSelectedPreviousMusic={() =>
                previousSelectedMusic()}
                onSelectedNextMusic={() =>
                nextSelectedMusic()}
            />
            <PlaylistDetails 
                Play={play}
                loaded={loaded}
            />
        </>
    )
}

export default PlaylistContainer;