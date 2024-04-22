import '@/styles/globals.css'
import '@farcaster/auth-kit/styles.css'
import type { AppProps } from 'next/app'
import { AuthKitProvider } from '@farcaster/auth-kit'

const config = {
	domain: process.env.MAINNET_DOMAIN || 'localhost:3000',
	siweUri: process.env.MAINNET_DOMAIN || 'http://localhost:3000/login',
	rpcUrl: process.env.OP_MAINNET_RPC_URL || 'https://mainnet.optimism.io',
	relay: 'https://relay.farcaster.xyz',
}

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthKitProvider config={config}>
			<Component {...pageProps} />
		</AuthKitProvider>
	)
}
