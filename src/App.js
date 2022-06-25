import React, {useState, useEffect} from "react";

function App() {
    const [data, setData] = useState([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]);

    return (
        <div
            style={{
                background: "#AD9D8F",
                width: "max-content",
                margin: "auto",
                padding: 5,
                borderRadius: 5,
                marginTop: 10,
            }}>

            {data.map((row, oneIndex) => {
                return (
                    <div style={{display: "flex"}} key={oneIndex}>
                        {row.map((digit, index) => (
                            <Block num={digit} key={index}/>
                        ))}
                    </div>
                );
            })
            }
        </div>
    );
}

const Block = ({num}) => {
    const {blockStyle} = style;

    return (
        <div
            style={{
                ...blockStyle,
                // background: getColors(num),
                color: num === 2 || num === 4 ? "#645B52" : "#F7F4EF",
            }}
        >
            {num}
            {/*{num !== 0 ? num : ""}*/}
        </div>
    );
};

const style = {
    blockStyle: {
        height: 80,
        width: 80,
        background: "lightgray",
        margin: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 45,
        fontWeight: "800",
        color: "white",
    },
    newGameButton: {
        padding: 10,
        background: "#846F5B",
        color: "#F8F5F0",
        width: 95,
        borderRadius: 7,
        fontWeight: "900",
        marginLeft: "auto",
        marginBottom: "auto",
        cursor: "pointer",
    },
    tryAgainButton: {
        padding: 10,
        background: "#846F5B",
        color: "#F8F5F0",
        width: 80,
        borderRadius: 7,
        fontWeight: "900",
        cursor: "pointer",
        margin: "auto",
        marginTop: 20,
    },
    gameOverOverlay: {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        borderRadius: 5,
        background: "rgba(238,228,218,.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
};

export default App;