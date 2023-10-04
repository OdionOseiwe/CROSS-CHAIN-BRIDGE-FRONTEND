import { useContractWrite, useWaitForTransaction,usePrepareContractWrite,} from 'wagmi';
import Button from '@mui/material/Button';
import abi from "../ABI/CustomTokenAbi.json"
import { toast } from 'react-toastify';


function ButtonMint() {

    const { config } = usePrepareContractWrite({
        address: '0x2F05A8702ed0377460e40fe479918e48EA3dfcFa',
        abi: abi,
        functionName: 'customMint',
        onError(error) {
            toast.error(`Failed! ${error.reason}`)
        },
    })

    const contractWrite = useContractWrite(config)

    const {isLoading} = useWaitForTransaction({
        hash: contractWrite.data?.hash,

        onSuccess() {
            toast.success(`Minted successfully`, {
                theme: "dark",
            })
        },
      
        onError(error) {
            toast.error(`Failed! ${error.reason}`, {
                theme: "dark",
            })
        }
    })

    return ( 
        <>
            <Button disabled={!contractWrite.write} onClick={() => contractWrite.write?.()} variant="contained">{
                isLoading  ? "Minting hp": "Mint hp"
            }</Button>
        </>
     );
}

export default ButtonMint;