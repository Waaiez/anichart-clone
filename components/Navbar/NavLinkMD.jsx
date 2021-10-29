import {
	CalendarIcon,
	ArchiveIcon,
	ChevronDoubleRightIcon,
	CogIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';

function NavLinkMD({ path, pathMatch, link, text, year, icon }) {
	function renderIcon(icon) {
		switch (icon) {
			case 'archiveIcon':
				return <ArchiveIcon className='h-6 w-6 flex mx-auto' />;
			case 'chevronIcon':
				return (
					<ChevronDoubleRightIcon className='h-6 w-6flex mx-auto' />
				);
			case 'calendarIcon':
				return <CalendarIcon className='h-6 w-6 flex mx-auto' />;
			case 'cogIcon':
				return <CogIcon className='h-6 w-6 flex mx-auto' />;
		}
	}

	return (
		<Link href={`${link}`}>
			<a className='group'>
				<div
					className={`text-base font-bold w-full px-5 group-hover:text-gray-200 transition duration-300 ease-in-out ${
						path === pathMatch ? 'text-gray-100' : 'text-gray-400'
					}`}
				>
					{!icon && text}
					{icon && renderIcon(icon)}
				</div>
				<div className='text-xs w-full px-5 text-gray-400'>
					{!icon && year} {icon && text}
				</div>
			</a>
		</Link>
	);
}

export default NavLinkMD;
