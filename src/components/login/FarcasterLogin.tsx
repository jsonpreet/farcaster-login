import { isMobile } from '@/lib/useIsMobile'
import { AuthClientError, StatusAPIResponse, useSignIn } from '@farcaster/auth-kit'
import { useCallback, useEffect, useState } from 'react'
import { Modal } from '../common/Modal'
import QrCodeModal from './QrCodeModal'

const FarcasterLogin = () => {
	const onSuccess = (res: any) => {
		console.log('success', res)
		// setAccessedProtocol('farcaster')
		// setAuthenticated(true)
	}
	const onError = (error: any) => {
		console.log('error', error)
	}
	const onStatusResponse = (res: any) => {
		console.log('status response', res)
	}

	const onSuccessCallback = useCallback(
		(res: StatusAPIResponse) => {
			onSuccess?.(res)
		},
		[onSuccess]
	)

	const onStatusCallback = useCallback(
		(res: StatusAPIResponse) => {
			onStatusResponse?.(res)
		},
		[onStatusResponse]
	)

	const onErrorCallback = useCallback(
		(error?: AuthClientError) => {
			onError?.(error)
		},
		[onError]
	)

	const signInState = useSignIn({
		onSuccess: (res: any) => {
			console.log('success', res)
			// setAccessedProtocol('farcaster')
			// setAuthenticated(true)
		},
		onError: onErrorCallback,
		onStatusResponse: onStatusCallback,
	})
	const { signIn, signOut, connect, reconnect, isSuccess, isError, error, channelToken, url, data, validSignature } = signInState
	const [showDialog, setShowDialog] = useState(false)
	const onClick = useCallback(() => {
		if (isError) {
			reconnect()
		}
		setShowDialog(true)
		signIn()
		if (url && isMobile()) {
			window.location.href = url
		}
	}, [isError, reconnect, signIn, url])
	const authenticated = isSuccess && validSignature
	useEffect(() => {
		if (!channelToken) {
			connect()
		}
	}, [channelToken, connect])
	console.log('signInState', signInState)
	return (
		<>
			<button className="bg-black px-4 py-2.5 text-white rounded-md" onClick={onClick}>
				Sign in with Farcaster
			</button>
			{showDialog && !isMobile() && url && (
				<Modal show={showDialog} onClose={() => setShowDialog(false)} title="">
					<QrCodeModal showModal={showDialog} closeModal={() => setShowDialog(false)} url={url} isError={isError} error={error} />
				</Modal>
			)}

			<div>
				<pre>{JSON.stringify(signInState, null, 2)}</pre>
			</div>
		</>
	)
}

export default FarcasterLogin
