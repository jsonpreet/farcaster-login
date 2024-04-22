import { SignInButton } from '@farcaster/auth-kit'
import FarcasterLogin from './FarcasterLogin'

function Login() {
	return (
		<div className="flex flex-row md:bg-white bg-pink-100 items-center justify-center h-screen">
			<div className="flex max-w-sm w-full flex-col gap-5">
				<FarcasterLogin />
				{/* <SignInButton onSuccess={({ fid, username }) => console.log(`Hello, ${username}! Your fid is ${fid}.`)} /> */}
			</div>
		</div>
	)
}

export default Login
