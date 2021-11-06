import { XCircleIcon } from '@heroicons/react/outline';

export default function ErrorAlert({ error }) {
	return (
		<div className='absolute top-0 right-0 z-50 w-64 h-32 mt-3 mr-3 alert-toast'>
			<label
				className='cursor-pointer close'
				title='close'
				htmlFor='alert-error'>
				<div className='flex justify-between px-4 py-2 font-bold text-white bg-red-500 rounded-t'>
					Error
					<XCircleIcon className='items-center w-6 h-6 text-white' />
				</div>
				<div className='px-3 py-3 text-red-700 bg-red-100 border border-t-0 border-red-400 rounded-b'>
					{error}
				</div>
			</label>
		</div>
	);
}
