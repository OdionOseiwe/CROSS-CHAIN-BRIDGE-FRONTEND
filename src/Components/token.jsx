import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React from "react";
import Token from "../img/token.png"
import ethereum from "../img/ethereum image.png"
import fantom from "../img/fantom.png"
import bnb from "../img/binance.png"
import matic from "../img/matic.logo.webp"
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

function Tokens(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const updateTokens=(token, symbol)=>{
        props.updateToken(token) 
        props.updateTokenS(symbol)
    }

    return ( 
        <>
              <Button onClick={handleOpen} className='transmit__tokenName'> <img src={props.TokenS} alt="logo" className="transmit__image" />  {props.token} <ArrowDropDownCircleOutlinedIcon /></Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        <Box>
                        <Typography>
                            <div className='Networks'>
                                <div className='Networks__1'>
                                    <div className='Network__select'>select  token</div>
                                    <div className="grid">
                                        <button onClick= {() => {updateTokens("WETH", ethereum)}} style={{ backgroundColor: props.token === "WETH" ? 'slategray': 'black'}}
 className="Network" > <img src={ethereum} alt="logo" className="transmit__image" /> WETH </button>
                                        <button onClick= {() => {updateTokens("WBNB", bnb) }} style={{ backgroundColor: props.token === "WBNB" ? 'slategray': 'black'}}
 className="Network" > <img src={bnb} alt="logo" className="transmit__image" /> WBNB </button>
                                        <button onClick= {() => {updateTokens("WMATIC", matic) }} style={{ backgroundColor: props.token === "WMATIC" ? 'slategray': 'black'}}
 className="Network" > <img src={matic} alt="logo" className="transmit__image" /> WMATIC </button>
                                        <button onClick= {() => {updateTokens("WFTM", fantom) }} style={{ backgroundColor: props.token === "WFTM" ? 'slategray': 'black'}}
 className="Network" >  <img src={fantom} alt="logo" className="transmit__image" /> WFTM</button>
                                        <button onClick= {() => {updateTokens("ODT", Token) }} style={{ backgroundColor: props.token === "ODT" ? 'slategray': 'black'}}
 className="Network" >  <img src={Token} alt="logo" className="transmit__image" /> HPT</button>
                                    </div>
                                </div>
                            </div>
                        </Typography>
                        </Box>
                    </Modal>             
        </>
     );
}

export default Tokens;