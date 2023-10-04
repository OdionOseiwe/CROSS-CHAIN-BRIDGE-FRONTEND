import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ethereum from "../img/ethereum image.png"
import base from "../img/base.jpeg"
import fantom from "../img/fantom.png"
import bnb from "../img/binance.png"
import matic from "../img/matic.logo.webp"
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

function Destinationchain(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick=(network, image)=>{
        props.update(network) 
        props.updateSymbol(image)
    }

    return ( 

        <div className="SourceChain">
            <div className="transmitFrom">
                <div className="transmitFrom__box">
                    <div className="transmitFrom__from">To</div>
                    <div className="transmitFrom__network" > <img className="transmitFrom__image" src={props.symbol} alt ="logo"/> 
                    <p className="transmitFrom__text">
                    <Button onClick={handleOpen} className='transmitFrom__btn'>  {props.network} <ArrowDropDownCircleOutlinedIcon/> </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        <Box>
                        <Typography>
                            <div className='Networks'>

                                <div className='Networks__1'>
                                    <div className='Network__select'>select destination Chain</div>
                                    <div className="grid">
                                    <button onClick={()=>{handleClick("Ethereum Goerli" , ethereum)}}  style={{ backgroundColor: props.network === "Ethereum Goerli" ? 'slategray': 'black'}}
                                            className="Network" ><img src={ethereum} className="transmitFrom__image" alt ="logo"/> Ethereum Goerli</button>

                                       <button onClick={()=>{handleClick("Base  testnet", base )}}  style={{ backgroundColor: props.network === "Base  testnet" ? 'slategray': 'black'}}
                                            className="Network" ><img src={base} className="transmitFrom__image" alt ="logo"/> Base  testnet</button>

                                        <button onClick={()=>{handleClick("Fantom testnet" , fantom)}}  style={{ backgroundColor: props.network === "Fantom testnet" ? 'slategray': 'black'}}
                                            className="Network" ><img src={fantom} className="transmitFrom__image" alt ="logo"/> Fantom testnet</button>

                                        <button onClick={()=>{handleClick("polygon mumbai", matic )}}  style={{ backgroundColor: props.network === "polygon mumbai" ? 'slategray': 'black'}}
                                            className="Network" ><img src={matic} className="transmitFrom__image" alt ="logo"/> polygon mumbai </button>
                                            
                                        <button onClick={()=>{handleClick("polygonZk testnet" , matic)}}  style={{ backgroundColor: props.network === "polygonZk testnet" ? 'slategray': 'black'}}
                                            className="Network" ><img src={matic} className="transmitFrom__image" alt ="logo"/> polygonZk testnet</button>

                                        <button onClick={()=>{handleClick("BNB testnet", bnb )}}  style={{ backgroundColor: props.network === "BNB testnet" ? 'slategray': 'black'}}
                                            className="Network" ><img src={bnb} className="transmitFrom__image" alt ="logo"/> BNB testnet</button>
                                    </div>
                                </div>
                          
                            </div>
                        </Typography>
                        </Box>
                    </Modal>
                    </p>
                </div>
            </div>
                <div>
                    <div className="transmitFrom__settings">
                    </div>
                </div>
            </div>
           
            <div className="transmitData">
                <div className="transmitDetails">
                    <div className="transmitDetails__send">Receive (estimated):</div>
                </div>
                <div className="transmit">
                    <div className="transmitData__Amount">
                        <input type="text" placeholder="0.0" className="transmitData__input"/>
                    </div>
                    <div className="transmit__token">
                        <img src={props.tokenS} alt="logo" className="transmit__image" />
                        <Button className='token'>{props.token}</Button>
                    </div>
            </div>
            </div>
        </div>

    );
}

export default Destinationchain;

