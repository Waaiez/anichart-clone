import Link from 'next/link';
import Image from 'next/image';

function ImageHeader({
	storedProvider,
	siteUrl,
	idMal,
	coverImage,
	title,
	colour,
	studios,
}) {
	return (
		<Link
			href={`${
				storedProvider === 'anilist'
					? siteUrl
					: idMal
					? `https://myanimelist.net/anime/${idMal}`
					: siteUrl
			}`}
		>
			<a className='group'>
				<div className='relative h-full w-full bg-theme-secondary'>
					<Image
						src={coverImage}
						alt={title + ' Image'}
						layout='fill'
					/>
				</div>
				<div className='bg-gray-700 bg-opacity-90 absolute bottom-0 w-full'>
					<div
						className='
    nameHover text-white pt-2 px-2 font-semibold text-sm transition duration-300 ease-in-out'
						style={{
							'--hover-colour': colour ? colour : '#69C3F0',
							'--hover-opacity': 1,
						}}
					>
						{title}
					</div>
					<div
						className='
        name pt-2 pb-2 px-2 font-semibold text-xs overflow-ellipsis'
						style={{
							'--name-colour': colour ? colour : '#69C3F0',
							'--name-opacity': 1,
						}}
					>
						{studios.map((element, index) => (
							<span key={index}>
								{element.name}
								{''}
								{index !== studios.length - 1 && ', '}
							</span>
						))}
					</div>
				</div>
			</a>
		</Link>
	);
}

export default ImageHeader;
