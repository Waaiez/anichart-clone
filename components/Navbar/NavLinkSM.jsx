import {
	ArchiveIcon,
	CalendarIcon,
	ChevronDoubleRightIcon,
	CogIcon,
} from '@heroicons/react/outline';
import { FaLeaf, FaRegSnowflake, FaSeedling, FaSun } from 'react-icons/fa';

import Link from 'next/link';

function NavLinkSM({ path, pathMatch, link, icon, iconText }) {
	function renderIcon(icon) {
		switch (icon) {
			case 'winterIcon':
				return <FaRegSnowflake className='flex w-5 h-5 mx-auto' />;
			case 'springIcon':
				return <FaSeedling className='flex w-5 h-5 mx-auto' />;
			case 'summerIcon':
				return <FaSun className='flex w-5 h-5 mx-auto' />;
			case 'fallIcon':
				return <FaLeaf className='flex w-5 h-5 mx-auto' />;
			case 'archiveIcon':
				return <ArchiveIcon className='flex w-5 h-5 mx-auto' />;
			case 'chevronIcon':
				return (
					<ChevronDoubleRightIcon className='flex w-5 h-5 mx-auto' />
				);
			case 'calendarIcon':
				return <CalendarIcon className='flex w-5 h-5 mx-auto' />;
			case 'cogIcon':
				return <CogIcon className='flex w-5 h-5 mx-auto' />;
		}
	}

	return (
		<Link href={`${link}`}>
			<a className='w-full group'>
				<div
					className={`my-2 flex flex-col w-full group-hover:text-[#3AA0D8] transition duration-300 ease-in-out ${
						path === pathMatch ? 'text-gray-100' : 'text-gray-400'
					}`}>
					{renderIcon(icon)}
					<div className='pt-1 text-xs text-center'>{iconText}</div>
				</div>
			</a>
		</Link>
	);
}

export default NavLinkSM;
