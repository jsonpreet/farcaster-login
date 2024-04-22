import type { FC, ReactNode } from 'react'
import { X } from 'lucide-react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import cn from '@/lib/cn'
import clsx from 'clsx'

interface ModalProps {
	children: ReactNode | ReactNode[]
	icon?: ReactNode
	onClose?: () => void
	show: boolean
	size?: 'lg' | 'md' | 'sm' | 'xs'
	title?: ReactNode
}

export const Modal: FC<ModalProps> = ({ children, icon, onClose, show, size = 'sm', title }) => {
	return (
		<Transition appear show={show} as={Fragment}>
			<Dialog
				as="div"
				className="fixed inset-0 z-10 flex min-h-screen items-center justify-center overflow-y-auto p-4 text-center sm:block sm:p-0"
				onClose={() => onClose?.()}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-100"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500/75 transition-opacity dark:bg-gray-900/80" />
				</Transition.Child>
				<span className="hidden sm:inline-block sm:h-screen sm:align-middle" />
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-100"
					enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
					enterTo="opacity-100 translate-y-0 sm:scale-100"
					leave="ease-in duration-100"
					leaveFrom="opacity-100 translate-y-0 sm:scale-100"
					leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				>
					<div
						className={cn(
							{ 'sm:max-w-5xl': size === 'lg' },
							{ 'sm:max-w-3xl': size === 'md' },
							{ 'sm:max-w-lg': size === 'sm' },
							{ 'sm:max-w-sm': size === 'xs' },
							'inline-block w-full scale-100 rounded-xl bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:align-middle dark:bg-gray-800'
						)}
					>
						<div className={clsx('divider flex items-center px-5', { 'justify-between py-3.5': title, 'justify-end pt-2.5': !title && onClose })}>
							{title ? (
								<div className="flex items-center space-x-2 font-bold">
									{icon}
									<div>{title}</div>
								</div>
							) : null}
							{onClose ? (
								<button className="rounded-full p-1 text-gray-800 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700" onClick={onClose} type="button">
									<X color="black" />
								</button>
							) : null}
						</div>
						{children}
					</div>
				</Transition.Child>
			</Dialog>
		</Transition>
	)
}
