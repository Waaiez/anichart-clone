import {
	ArchiveIcon,
	CalendarIcon,
	ChevronDoubleRightIcon,
	CogIcon,
} from '@heroicons/react/outline';

import Link from 'next/link';

function NavLinkMD({ path, pathMatch, link, text, year, icon }) {
	function renderIcon(icon) {
		switch (icon) {
			case 'archiveIcon':
				return <ArchiveIcon className='flex w-6 h-6 mx-auto' />;
			case 'chevronIcon':
				return (
					<ChevronDoubleRightIcon className='h-6 mx-auto w-6flex' />
				);
			case 'calendarIcon':
				return <CalendarIcon className='flex w-6 h-6 mx-auto' />;
			case 'cogIcon':
				return <CogIcon className='flex w-6 h-6 mx-auto' />;
		}
	}

	return (
		<Link href={`${link}`}>
			<a className='group'>
				<div
					className={`text-base font-bold w-full px-5 group-hover:text-gray-200 transition duration-300 ease-in-out ${
						path === pathMatch ? 'text-gray-100' : 'text-gray-400'
					}`}>
					{icon ? renderIcon(icon) : text}
				</div>
				<div className='w-full px-5 pt-1 text-xs text-gray-400'>
					{icon ? text : year}
				</div>
			</a>
		</Link>
	);
}

export default NavLinkMD;
