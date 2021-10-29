import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { PlusCircleIcon } from '@heroicons/react/outline';
import parse from 'html-react-parser';
import { useStorage } from '../../context/StorageContext';
import ImageHeader from './ImageHeader';
import AiringEpisodeInfo from './AiringEpisodeInfo';
import AiringScheduleInfo from './AiringScheduleInfo';
import AiringSourceInfo from './AiringSourceInfo';
import Rankings from './Rankings';
import GenreInfo from './GenreInfo';
import AdditionalInfo from './AdditionalInfo';

export default function Card({ data }) {
	const { getItem } = useStorage();
	const storedLanguage = getItem('language');
	const storedProvider = getItem('provider');
	momentDurationFormatSetup(moment);
	console.log(data);
	return (
		<div className='w-full sm:h-72 xs:h-60 max-h-72 group transition duration-500 ease-in-out drop-shadow-xl hover:drop-shadow-2xl'>
			<div className='flex rounded-md overflow-hidden h-full '>
				<div className='w-2/5 relative z-50'>
					<ImageHeader
						storedProvider={storedProvider}
						siteUrl={data.siteId}
						idMal={data.idMal}
						coverImage={data.coverImage.extraLarge}
						title={
							data.title[storedLanguage] ??
							data.title.romaji ??
							data.title.native
						}
						colour={data.coverImage.color}
						studios={data.studios.nodes}
					/>
				</div>
				<div className='w-3/5'>
					<div className='h-5/6 bg-theme-secondary p-4 pb-2'>
						<div className='h-1/4 xs:h-2/6 flex relative'>
							<div className='w-full absolute -right-96 transition-all duration-500 ease-in-out group-hover:right-0 flex'>
								<AdditionalInfo
									hashtag={data.hashtag}
									links='links'
									trailer={data.trailer}
								/>
							</div>
							<div className='absolute left-0 transition-all duration-500 ease-in-out group-hover:-left-96 z-10 flex w-full'>
								<div className='w-10/12 2xl:w-4/5 overflow-hidden overflow-ellipsis '>
									<AiringEpisodeInfo
										schedule={data.airingSchedule.nodes[0]}
										status={data.status}
										episodes={data.episodes}
									/>
									<AiringScheduleInfo
										schedule={data.airingSchedule.nodes[0]}
										startDate={data.startDate}
									/>
									<AiringSourceInfo
										relations={data.relations.edges}
										storedLanguage={storedLanguage}
										source={data.source}
									/>
								</div>
								<div className='w-2/12 2xl:w-1/5 sm:flex hidden flex-col mr-1'>
									<Rankings
										averageScore={data.averageScore}
										rankings={data.rankings}
									/>
								</div>
							</div>
						</div>
						<div className='h-3/4 xs:h-4/6'>
							<p className='text-theme-base text-xs mt-2 line-clamp-6 group-hover:line-clamp-9 transition duration-300 ease-in-out'>
								{data.description && parse(data.description)}
							</p>
						</div>
					</div>
					<div className='h-1/6 bg-theme-tertiary flex'>
						<div className='overflow-hidden w-9/12 flex items-center ml-2 flex-wrap h-full'>
							<GenreInfo
								genres={data.genres}
								colour={data.coverImage.color}
							/>
						</div>
						<div className='w-3/12 items-center flex justify-center'>
							<PlusCircleIcon className='h-6 w-6 text-theme-base font-bold' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
