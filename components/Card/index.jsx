import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import {
	EmojiHappyIcon,
	EmojiSadIcon,
	HeartIcon,
	PlusCircleIcon,
} from '@heroicons/react/outline';
import parse from 'html-react-parser';
import { useStorage } from '../../context/StorageContext';
import Link from 'next/link';

export default function Card({ data }) {
	const { getItem } = useStorage();
	const storedLanguage = getItem('language');
	const storedProvider = getItem('provider');
	momentDurationFormatSetup(moment);
	console.log(data);
	return (
		<div className='relative max-h-72 min-w-96 h-72 rounded-md drop-shadow-xl hover:drop-shadow-2xl transition duration-500 ease-in-out bg-theme-secondary flex group'>
			<div className='relative xs:w-4/5 sm:w-2/4 w-1/3 lg:w-4/5'>
				<Link
					href={`${
						storedProvider === 'anilist'
							? data.siteUrl
							: data.idMal
							? `https://myanimelist.net/anime/${data.idMal}`
							: data.siteUrl
					}`}
				>
					<a className='group w-full'>
						<div className='bg-black bg-opacity-75 absolute bottom-0 w-full'>
							<div
								className='
						nameHover text-white pt-2 px-2 font-semibold text-sm'
								style={{
									'--hover-colour': data.coverImage.color
										? data.coverImage.color
										: '#69C3F0',
									'--hover-opacity': 1,
								}}
							>
								{data.title[storedLanguage]}
							</div>
							<div
								className='
							name pt-1 pb-2 px-2 font-semibold text-xs overflow-ellipsis'
								style={{
									'--name-colour': data.coverImage.color
										? data.coverImage.color
										: '#69C3F0',
									'--name-opacity': 1,
								}}
							>
								{data.studios.nodes.map((element, index) => (
									<span key={index}>
										{element.name}
										{''}
										{index !==
											data.studios.nodes.length - 1 &&
											', '}
									</span>
								))}
							</div>
						</div>

						<img
							src={data.coverImage.extraLarge}
							className='h-full w-full'
						/>
					</a>
				</Link>
			</div>

			<div className='flex flex-col w-full bg-theme-secondary'>
				<div className='flex flex-col h-5/6 mx-4 mt-4'>
					{/* 1 */}
					<div className='flex justify-between group-hover:hidden'>
						<div className='flex justify-start w-11/12 2xl:w-4/5'>
							<div className='flex flex-col w-full'>
								<div className='text-theme-base xs:text-xs text-sm font-semibold'>
									{data.airingSchedule.nodes[0]
										? `Ep ${data.airingSchedule.nodes[0].episode} airing in`
										: data.status === 'FINISHED'
										? data.episodes === 1
											? `${data.episodes} Episode aired on`
											: `${data.episodes} Episodes aired on`
										: 'Airing in'}
								</div>
								<div
									className='text-theme-base text-xl xl:text-base xs:text-base
								 font-semibold w-11/12 overflow'
								>
									{data.airingSchedule.nodes[0]
										? moment
												.duration(
													moment(
														data.airingSchedule
															.nodes[0].airingAt *
															1000
													).diff(moment())
												)
												.format(
													'd [days,]h [hours,]m [mins]'
												)
												.split(',')
												.slice(0, 2)
												.join(', ')
										: moment(
												data.startDate.month,
												'MM'
										  ).format('MMMM') +
										  ' ' +
										  data.startDate.year}
								</div>
								<div className='w-11/12'>
									{data.relations.edges && (
										<div className='text-theme-base text-xs font-semibold  overflow-hidden overflow-ellipsis'>
											{data.relations.edges.find(
												(t) =>
													t.relationType === 'PREQUEL'
											) !== undefined ? (
												'Sequel to ' +
												data.relations.edges.find(
													(t) =>
														t.relationType ===
														'PREQUEL'
												).node.title.romaji
											) : (
												<div className='capitalize'>
													Source • {data.source}
												</div>
											)}
										</div>
									)}
								</div>
							</div>
						</div>
						<div className='flex justify-end w-1/12'>
							<div className='flex flex-col'>
								<div className='sm:flex hidden'>
									{data.averageScore && (
										<>
											<div>
												{data.averageScore >= 75 && (
													<EmojiHappyIcon className='h-6 w-6 text-green-500 font-bold' />
												)}
												{data.averageScore <= 74 &&
													data.averageScore >= 61 && (
														<EmojiHappyIcon className='h-6 w-6 text-[#f79a63] font-bold' />
													)}
												{data.averageScore <= 60 && (
													<EmojiSadIcon className='h-6 w-6 text-red-500 font-bold' />
												)}
											</div>
											<div className='text-theme-base text-sm font-semibold ml-2'>
												{data.averageScore}%
											</div>
										</>
									)}
								</div>
								<div className='sm:flex hidden'>
									{data.rankings && (
										<>
											{data.rankings.find(
												(t) =>
													t.season !== null &&
													t.type === 'POPULAR'
											) !== undefined && (
												<div>
													<HeartIcon className='h-6 w-6 text-red-600' />
												</div>
											)}
											<div className='text-theme-base text-sm font-bold ml-2'>
												{data.rankings.find(
													(t) =>
														t.season !== null &&
														t.type === 'POPULAR'
												) !== undefined &&
													'#' +
														data.rankings.find(
															(t) =>
																t.season !==
																	null &&
																t.type ===
																	'POPULAR'
														).rank}
											</div>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
					{/* 1 */}
					{/* 2 */}
					<div className='justify-between hidden group-hover:flex transition duration-500 ease-in-out'>
						<div className='flex justify-start w-11/12 2xl:w-4/5'>
							<div className='flex flex-col w-full'>
								<div className='text-theme-base text-xl xl:text-base xs:text-base font-semibold'>
									{data.hashtag && data.hashtag.split(' ')[0]}
								</div>
								<div
									className='text-theme-base text-xl xl:text-base xs:text-base
								 font-semibold w-11/12 overflow'
								>
									links
								</div>
							</div>
						</div>
						<div className='flex justify-end w-4/12'>
							<div className='flex flex-col'>
								<div className='sm:flex hidden'>
									{data.trailer && (
										<Link href={data.trailer.id}>
											<a className='group'>
												<img
													src={`${data.trailer.thumbnail}`}
													alt=''
													style={{
														height: '75px',
														width: '360px',
													}}
												/>
											</a>
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
					{/* 2 */}
					<div className='relative'>
						<p className='absolute text-theme-base text-xs mt-2 line-clamp-6 group-hover:line-clamp-10 '>
							{data.description && parse(data.description)}
						</p>
					</div>
				</div>
				<div className='relative pb-10 h-3 bg-theme-tertiary'>
					<div className='flex'>
						<div className='flex overflow-hidden ml-1 mt-2 w-full'>
							{data.genres &&
								data.genres.slice(0, 2).map((element) => (
									<div
										className='genre rounded-full px-3 h-6 flex items-center mx-1 text-xs'
										style={{
											'--genre-colour': data.coverImage
												.color
												? data.coverImage.color
												: '#69C3F0',
											'--genre-opacity': 1,
										}}
									>
										{element}
									</div>
								))}
						</div>
						<div className='flex justify-end w-3/12 mt-1 items-center'>
							<PlusCircleIcon className='h-6 w-6 text-theme-base font-bold mr-3' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
