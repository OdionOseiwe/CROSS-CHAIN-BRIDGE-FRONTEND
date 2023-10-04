import Arrow from "./img/arrow.png"
import * as React from 'react';
import Destinationchain from "./Components/Destination"
import SourceChain from "./Components/Source"
import Celo from "./img/celoo.png"
import ethereum from "./img/ethereum image.png"
import Token from "./img/token.png"


function TransferCard() {
    const [SourceNetwork, changeSourceNetwork] = React.useState("celo Aljores")
    const [DestinationNetwork, changeDestinationNetwork] = React.useState("Base testnet")
    const [token, setToken] = React.useState("HPT")
    const [tokenS, setTokenS] = React.useState(Token)
    const [Simage, setSImage] = React.useState(Celo)
    const [Dimage, setDImage] = React.useState(ethereum)

    const toggle=()=>{
        changeSourceNetwork(DestinationNetwork)
        changeDestinationNetwork(SourceNetwork)
        setSImage(Dimage)
        setDImage(Simage)
    }

    return ( 
        <div className="sm:flex flex-col items-center justify-start	">
            <div className="transferCard sm:p-3.5 sm:bg-zinc-800">
                <SourceChain network = {SourceNetwork} update = {changeSourceNetwork} token = {token} updatetoken={setToken}  symbol = {Simage} updateSymbol = {setSImage} TokenS={tokenS} uptokenS={setTokenS}/>
                <div className="transmit__arrow">
                    <button onClick={()=>{toggle()}}  className="transmit__arrow"><img src={Arrow} alt="logo" className="arrow" /></button>

                </div>
                <Destinationchain network = {DestinationNetwork} update = {changeDestinationNetwork} token= {token}  symbol = {Dimage} updateSymbol = {setDImage} tokenS= {tokenS}/>
                <div className="Transfer">
                    <button >Transfer</button>
                </div>
            </div>
        </div>
       
    );
}

export default TransferCard;