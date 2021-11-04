import { Switch } from '@headlessui/react';
import { PlusCircleIcon } from '@heroicons/react/outline';
import {
	CheckCircleIcon,
	QuestionMarkCircleIcon,
	XCircleIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import { useState } from 'react';

function PopupContent() {
	return (
		<>
			<div className='w-full h-1/3 rounded-tl-md rounded-tr-md hover:bg-[#3DB4F2] text-sm flex items-center justify-start px-2 cursor-pointer'>
				<CheckCircleIcon className='w-4 h-4 text-green-500' />
				<span className='px-2 font-semibold text-theme-base'>
					Watching
				</span>
			</div>
			<div className='w-full h-1/3 hover:bg-[#3DB4F2] text-sm flex items-center justify-start px-2 cursor-pointer'>
				<QuestionMarkCircleIcon className='w-4 h-4 text-yellow-500' />
				<span className='px-2 font-semibold text-theme-base'>
					Maybe Watching
				</span>
			</div>
			<div className='w-full h-1/3 rounded-bl-md rounded-br-md hover:bg-[#3DB4F2] text-sm flex items-center justify-start px-2 cursor-pointer'>
				<XCircleIcon className='w-4 h-4 text-red-500' />
				<span className='px-2 font-semibold text-theme-base'>
					Not Watching
				</span>
			</div>
		</>
	);
}

function StatusPopup() {
	const [isShowing, setIsShowing] = useState(false);
	return (
		<>
			<div className='relative items-center justify-end w-10 h-10 md:flex group-status sm:hidden'>
				<PlusCircleIcon className='w-6 h-6 font-bold text-theme-base' />
				<div className='absolute z-50 hidden w-40 text-center transition duration-300 ease-in-out rounded-md shadow-md h-28 bottom-10 -right-2 group-status-hover:block bg-theme-secondary'>
					<PopupContent />
				</div>
			</div>

			<div className='relative flex items-center justify-end w-10 h-10 md:hidden'>
				<Switch checked={isShowing} onChange={setIsShowing}>
					<PlusCircleIcon className='w-6 h-6 font-bold text-theme-base' />
					{isShowing && (
						<div className='absolute z-50 w-40 text-center transition duration-300 ease-in-out rounded-md shadow-md h-28 bottom-10 -right-2 bg-theme-secondary'>
							<PopupContent />
						</div>
					)}
				</Switch>
			</div>
		</>
	);
}

export default StatusPopup;
