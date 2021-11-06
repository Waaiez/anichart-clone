import { Dialog, Switch } from '@headlessui/react';
import { PlayIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function renderLinkIcon(site, url, index) {
	switch (site) {
		case 'Official Site':
			return (
				<Link href={url} key={index}>
					<a className='bg-[#515381] rounded-sm w-5 flex items-center justify-center h-5 mx-1'>
						<Image
							src='/linkLogo.svg'
							height='15px'
							width='20px'
							alt='Link'
						/>
					</a>
				</Link>
			);
		case 'Funimation':
			return (
				<Link href={url} key={index}>
					<a className='bg-[#9e52ff] rounded-sm w-5 flex items-center justify-center h-5 mx-1'>
						<Image
							src='/funimationLogo.svg'
							height='15px'
							width='20px'
							alt='Funimation Link'
						/>
					</a>
				</Link>
			);
		case 'Hidive':
			return (
				<Link href={url} key={index}>
					<a className='bg-[#3db4f2] rounded-sm w-5 flex items-center justify-center h-5 mx-1'>
						<Image
							src='/hidiveLogo.svg'
							height='15px'
							width='20px'
							alt='Hidive Link'
						/>
					</a>
				</Link>
			);
		case 'Crunchyroll':
			return (
				<Link href={url} key={index}>
					<a className='bg-[#f79a63] rounded-sm w-5 flex items-center justify-center h-5 mx-1'>
						<Image
							src='/crunchyrollLogo.svg'
							height='15px'
							width='20px'
							alt='Crunchyroll Link'
						/>
					</a>
				</Link>
			);
		case 'VRV':
			return (
				<Link href={url} key={index}>
					<a className='bg-[#f7bf63] rounded-sm w-5 flex items-center justify-center h-5 mx-1'>
						<Image
							src='/vrvLogo.svg'
							height='15px'
							width='20px'
							alt='VRV Link'
						/>
					</a>
				</Link>
			);
		case 'Hulu':
			return (
				<Link href={url} key={index}>
					<a className='bg-[#5dc12f] rounded-sm w-5 flex items-center justify-center h-5 mx-1'>
						<Image
							src='/huluLogo.svg'
							height='15px'
							width='20px'
							alt='Hulu Link'
						/>
					</a>
				</Link>
			);
		case 'Netflix':
			return (
				<Link href={url} key={index}>
					<a className='bg-[#e85d75] rounded-sm w-5 flex items-center justify-center h-5 mx-1'>
						<Image
							src='/netflixLogo.svg'
							height='15px'
							width='20px'
							alt='Netflix Link'
						/>
					</a>
				</Link>
			);
		case 'Youtube':
			return (
				<Link href={url} key={index}>
					<a className='bg-[#9e52ff] rounded-sm w-5 flex items-center justify-center h-5 mx-1'>
						<Image
							src='/youtubeLogo.svg'
							height='15px'
							width='20px'
							alt='Youtube Link'
						/>
					</a>
				</Link>
			);
	}
}

function AdditionalInfo({ hashtag, links, trailer }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className='flex justify-start w-8/12 2xl:w-4/5'>
				<div className='flex flex-col w-full'>
					<div className='text-xl font-semibold text-theme-base xl:text-base xs:text-base'>
						{hashtag && hashtag.split(' ')[0]}
					</div>
					<div className='flex flex-wrap h-5 overflow-hidden text-xl font-semibold text-theme-base xl:text-base xs:text-base'>
						{links.map((element, index) =>
							renderLinkIcon(element.site, element.url, index)
						)}
					</div>
				</div>
			</div>
			<div className='flex justify-end w-4/12'>
				<div className='flex flex-col'>
					<div className='hidden sm:flex'>
						{trailer && (
							<Switch
								checked={isOpen}
								onChange={setIsOpen}
								className='relative'>
								<div className='relative w-20 min-h-11 h-11 max-h-11'>
									<Image
										src={trailer.thumbnail}
										alt='Trailer Thumbnail'
										layout='fill'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mOcv3j9fwYiAOOoQvoqBACcpB1r8c0b1gAAAABJRU5ErkJggg=='
									/>
									<div className='absolute top-0 w-full h-11 bg-[#292929] opacity-70'></div>
								</div>

								<PlayIcon className='absolute inset-0 flex items-center justify-center w-6 m-auto text-white h6' />
							</Switch>
						)}
					</div>
				</div>
			</div>

			<Dialog
				open={isOpen}
				onClose={() => setIsOpen(false)}
				className='fixed inset-0 z-50 flex items-center justify-center w-4/6 m-auto overflow-y-auto bg-gray-400 h-3/4'>
				<Dialog.Overlay />
				<iframe
					className='w-full h-full'
					src={`https://www.youtube.com/embed/${
						trailer && trailer.id
					}?autoplay=1&mute=1`}></iframe>
			</Dialog>
		</>
	);
}

export default AdditionalInfo;
