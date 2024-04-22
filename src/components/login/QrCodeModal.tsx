import { QRCode } from '@farcaster/auth-kit'
import React from 'react'

type Props = {
	url: string
	isError: boolean
	error?: { message: string }
	showModal: boolean
	closeModal: () => void
}

function QrCodeModal({ url, isError, error, showModal, closeModal }: Props) {
	return (
		<>
			<div className="flex flex-col space-y-5 pb-5">
				<div className="flex flex-col items-center">
					<h2 className="font-bold">Sign in with Farcaster</h2>
					<h3>Scan with your phone's camera to continue.</h3>
				</div>
				{isError ? (
					<>
						<>Error</>
						<div>{error?.message ?? 'Unknown error, please try again.'}</div>
					</>
				) : (
					<>
						<div className="flex items-center justify-center">
							<QRCode uri={url} size={264} logoSize={22} logoMargin={12} />
						</div>
						<div className="flex items-center justify-center">
							<button
								onClick={() => {
									window.location.href = url
								}}
							>
								<div className="flex flex-row items-center">
									<svg xmlns="http://www.w3.org/2000/svg" width={12} height={18} fill="none">
										<path
											fill="#fff"
											fillRule="evenodd"
											d="M0 3a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3Zm4-1.5v.75c0 .414.336.75.75.75h2.5A.75.75 0 0 0 8 2.25V1.5h1A1.5 1.5 0 0 1 10.5 3v12A1.5 1.5 0 0 1 9 16.5H3A1.5 1.5 0 0 1 1.5 15V3A1.5 1.5 0 0 1 3 1.5h1Z"
											clipRule="evenodd"
										/>
									</svg>
									<span style={{ marginLeft: 9 }}>I'm using my phone →</span>
								</div>
							</button>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default QrCodeModal
