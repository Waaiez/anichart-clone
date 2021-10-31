import Image from 'next/image';
import Link from 'next/link';

function AdditionalInfo({ hashtag, links, trailer }) {
	function renderLinkIcon(site, url) {
		switch (site) {
			case 'Official Site':
				return (
					<Link href={url}>
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
					<Link href={url}>
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
					<Link href={url}>
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
					<Link href={url}>
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
					<Link href={url}>
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
					<Link href={url}>
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
					<Link href={url}>
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
					<Link href={url}>
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

	return (
		<>
			<div className='flex justify-start w-11/12 2xl:w-4/5'>
				<div className='flex flex-col w-full'>
					<div className='text-xl font-semibold text-theme-base xl:text-base xs:text-base'>
						{hashtag && hashtag.split(' ')[0]}
					</div>
					<div className='flex w-11/12 text-xl font-semibold text-theme-base xl:text-base xs:text-base overflow'>
						{links.map((element, index) =>
							renderLinkIcon(element.site, element.url)
						)}
					</div>
				</div>
			</div>
			<div className='flex justify-end w-4/12'>
				<div className='flex flex-col'>
					<div className='hidden sm:flex'>
						{trailer && (
							<Link href={trailer.id}>
								<a className='group'>
									<Image
										src={trailer.thumbnail}
										alt='Trailer Thumbnail'
										height='42px'
										width='75px'
										placeholder='blur'
										blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mOcv3j9fwYiAOOoQvoqBACcpB1r8c0b1gAAAABJRU5ErkJggg=='
									/>
								</a>
							</Link>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default AdditionalInfo;
