import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import App from './App'

const chains = [arbitrum, mainnet, polygon]
const projectId = import.meta.env.VITE_PROJECT_ID

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
     autoConnect: true,
     connectors: w3mConnectors({ projectId, chains }),
     publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

function Application() {
     return (
          <>
               <WagmiConfig config={wagmiConfig}>
                    <App />
               </WagmiConfig>

               <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
          </>
     )
}

export default Application