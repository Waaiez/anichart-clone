import Image from 'next/image';
import Link from 'next/link';

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
			}`}>
			<a className='group'>
				<div className='relative w-full h-full bg-theme-secondary'>
					<Image
						src={coverImage}
						alt={title + ' Image'}
						layout='fill'
						placeholder='blur'
						blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mOcv3j9fwYiAOOoQvoqBACcpB1r8c0b1gAAAABJRU5ErkJggg=='
					/>
				</div>
				<div className='bg-[#292929] bg-opacity-90 absolute bottom-0 w-full'>
					<div
						className='px-2 pt-2 text-sm font-semibold text-white transition duration-300 ease-in-out nameHover'
						style={{
							'--hover-colour': colour ? colour : '#69C3F0',
							'--hover-opacity': 1,
						}}>
						{title}
					</div>
					<div
						className='px-2 pt-2 pb-2 text-xs font-semibold name overflow-ellipsis'
						style={{
							'--name-colour': colour ? colour : '#69C3F0',
							'--name-opacity': 1,
						}}>
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
