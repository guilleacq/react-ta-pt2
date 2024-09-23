import React from "react";
import { useState } from "react";

function Ta5() {

    const [showSubtitle, setShowSubtitle] = useState(false);

    const alternate = () => {
        setShowSubtitle(!showSubtitle);
    }

    return (
        <div className="container">
            <h1 className="title">TA5 - Alternar</h1>
            {showSubtitle && <h2 className="subtitle alternable">Este es un subtitulo</h2>}
            <br/>
            <button className="button is-primary" onClick={alternate}>Alternar</button>
        </div>
    )
}

export default Ta5;