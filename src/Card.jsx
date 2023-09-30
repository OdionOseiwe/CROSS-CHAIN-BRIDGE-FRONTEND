import Setting from "./img/settings.jpeg"
import Token from "./img/token.png"
import Celo from "./img/celoo.png"
import Arrow from "./img/arrow.png"

import Destinationchain from "./SourceChainModal"

function TransferCard() {
    return ( 
        <div className="sm:flex flex-col items-center justify-start	">
            <div className="transferCard sm:p-3.5 sm:bg-zinc-800">
                <div className="SourceChain">
                    <div className="transmitFrom">
                        <div className="transmitFrom__box">
                            <div className="transmitFrom__from">From</div>
                            <div className="transmitFrom__network" > <img className="transmitFrom__image" src={Celo} alt ="logo"/> <p className="transmitFrom__text">Celo Alfajores</p></div>
                        </div>
                        <div>
                            <div className="transmitFrom__settings">
                                <a href=""><img className="transmitFrom__image" src={Setting} alt ="logo"/></a>    
                            </div>
                        </div>
                    </div>
                   
                    <div className="transmitData">
                        <div className="transmitDetails">
                            <div className="transmitDetails__send">Send:</div>
                            <div className="transmitDetails__Max">Max: <span className="transmitDetails__number">0</span></div>
                        </div>
                        <div className="transmit">
                            <div className="transmitData__Amount">
                                <input type="text" placeholder="0.0" className="transmitData__input"/>
                            </div>
                            <div className="transmit__token">
                                <img src={Token} alt="logo" className="transmit__image" />
                                <div className="transmit__tokenName">ODT</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="transmit__arrow"><img src={Arrow} alt="logo" className="arrow" /></div>
                <Destinationchain/>
                
                <div className="Transfer">Transfer</div>
            </div>
        </div>
       
    );
}

export default TransferCard;