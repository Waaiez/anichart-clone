import {
	CalendarIcon,
	ArchiveIcon,
	ChevronDoubleRightIcon,
	CogIcon,
} from '@heroicons/react/outline';
import { FaRegSnowflake, FaSeedling, FaSun, FaLeaf } from 'react-icons/fa';
import Link from 'next/link';

function NavLinkSM({ path, pathMatch, link, icon, iconText }) {
	function renderIcon(icon) {
		switch (icon) {
			case 'winterIcon':
				return <FaRegSnowflake className='h-5 w-5 flex mx-auto' />;
			case 'springIcon':
				return <FaSeedling className='h-5 w-5 flex mx-auto' />;
			case 'summerIcon':
				return <FaSun className='h-5 w-5 flex mx-auto' />;
			case 'fallIcon':
				return <FaLeaf className='h-5 w-5 flex mx-auto' />;
			case 'archiveIcon':
				return <ArchiveIcon className='h-5 w-5 flex mx-auto' />;
			case 'chevronIcon':
				return (
					<ChevronDoubleRightIcon className='h-5 w-5 flex mx-auto' />
				);
			case 'calendarIcon':
				return <CalendarIcon className='h-5 w-5 flex mx-auto' />;
			case 'cogIcon':
				return <CogIcon className='h-5 w-5 flex mx-auto' />;
		}
	}

	return (
		<Link href={`${link}`}>
			<a className='group w-full'>
				<div
					className={`my-2 flex flex-col w-full group-hover:text-[#3AA0D8] transition duration-300 ease-in-out ${
						path === pathMatch ? 'text-gray-100' : 'text-gray-400'
					}`}
				>
					{renderIcon(icon)}
					<div className='text-xs text-center'>{iconText}</div>
				</div>
			</a>
		</Link>
	);
}

export default NavLinkSM;
