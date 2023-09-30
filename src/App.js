// import logo from './logo.svg';
import './App.css';
import TransferCard from './Card';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets,RainbowKitProvider,darkTheme} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {mainnet, polygon, optimism, arbitrum, base, zora,} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Button from '@mui/material/Button';


function App() {
  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, base, zora],
    [
      alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains
  });
  
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  })
  return (
    <WagmiConfig config={wagmiConfig}>
    <RainbowKitProvider chains={chains} theme={darkTheme({
          accentColor: '#000',
          accentColorForeground: 'white',
          borderRadius: 'small',
          fontStack: 'system',
          overlayBlur: 'small',
        })}>
    <div className='layout'>
      <div className='heading'>
        <h2 className='text-white text-3xl'>Next Bridge</h2>
        <Button variant="contained">Mint ODT</Button>
      <ConnectButton showBalance={{
          smallScreen: false,
          largeScreen: true,
        }} 
      />
      </div>
     
      <TransferCard/>
    </div>
    </RainbowKitProvider>
  </WagmiConfig>
   
  );
}

export default App;
