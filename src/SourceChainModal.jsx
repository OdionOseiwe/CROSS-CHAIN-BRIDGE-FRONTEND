import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ethereum from "./img/ethereum image.png"
import Token from "./img/token.png"
import DropDown from "./img/drop down.png"


function Destinationchain() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return ( 

        <div className="SourceChain">
            <div className="transmitFrom">
                <div className="transmitFrom__box">
                    <div className="transmitFrom__from">To</div>
                    <div className="transmitFrom__network" > <img className="transmitFrom__image" src={ethereum} alt ="logo"/> 
                    <p className="transmitFrom__text">
                    <Button onClick={handleOpen} className='transmitFrom__btn'>  Ethereum Goerli <img src={DropDown} className="drop_down"/></Button>
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
                                        <div className="Network">Ethereum Mainnet</div>
                                        <div className="Network">Ethereum Goerli</div>
                                        <div className="Network">Polygon Mainnet</div>
                                        <div className="Network">Polygon Mumbai</div>
                                        <div className="Network">Celo Mainnet</div>
                                        <div className="Network">Celo testnet</div>
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
                        <img src={Token} alt="logo" className="transmit__image" />
                        <div className="transmit__tokenName">ODT</div>
                    </div>
            </div>
            </div>
        </div>

    );
}

export default Destinationchain;