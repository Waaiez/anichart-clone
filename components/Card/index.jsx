import parse from 'html-react-parser';

import { useStorage } from '../../context/StorageContext';
import { renderAiringDate, renderAiringInfo } from '../../lib/airingInfo';
import AdditionalInfo from './AdditionalInfo';
import AiringSourceInfo from './AiringSourceInfo';
import GenreInfo from './GenreInfo';
import ImageHeader from './ImageHeader';
import Rankings from './Rankings';
import StatusPopup from './StatusPopup';

export default function Card({ data }) {
	const { getItem } = useStorage();
	const storedLanguage = getItem('language');
	const storedProvider = getItem('provider');
	console.log(data);

	return (
		<div className='relative w-full transition duration-500 ease-in-out sm:h-72 xs:h-60 max-h-72 drop-shadow-xl hover:drop-shadow-2xl'>
			<div className='relative flex h-full overflow-hidden rounded-md group'>
				<div className='relative z-50 w-2/5'>
					<ImageHeader
						storedProvider={storedProvider}
						siteUrl={data.siteUrl}
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
					<div className='p-4 pb-2 h-5/6 bg-theme-secondary'>
						<div className='relative flex h-1/4 xs:h-2/6'>
							<div className='absolute left-0 flex w-full transition-all duration-500 ease-in-out delay-100 translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transform'>
								<AdditionalInfo
									hashtag={data.hashtag}
									links={data.externalLinks}
									trailer={data.trailer}
								/>
							</div>
							<div className='absolute z-10 flex w-full transition-all duration-500 ease-in-out delay-100 opacity-100 group-hover:-translate-x-full group-hover:opacity-0 transform'>
								<div className='w-10/12 overflow-hidden 2xl:w-4/5 overflow-ellipsis '>
									<div className='text-sm font-semibold text-theme-base xs:text-xs'>
										{renderAiringInfo(
											data.airingSchedule.nodes[0],
											data.status,
											data.episodes
										)}
									</div>
									<div className='text-xl font-semibold text-theme-base xs:text-base'>
										{renderAiringDate(
											data.airingSchedule.nodes[0],
											data.startDate
										)}
									</div>
									<AiringSourceInfo
										relations={data.relations.edges}
										storedLanguage={storedLanguage}
										source={data.source}
									/>
								</div>
								<div className='flex-col hidden w-2/12 mr-1 2xl:w-1/5 sm:flex'>
									<Rankings
										averageScore={data.averageScore}
										rankings={data.rankings}
									/>
								</div>
							</div>
						</div>
						<div className='h-3/4 xs:h-4/6'>
							<p className='mt-2 text-xs text-theme-base line-clamp-6 md:group-hover:line-clamp-9 group-hover:line-clamp-7'>
								{data.description && parse(data.description)}
							</p>
						</div>
					</div>
					<div className='flex h-1/6 bg-theme-tertiary'>
						<div className='flex flex-wrap items-center w-9/12 h-full ml-2 overflow-hidden'>
							<GenreInfo
								genres={data.genres}
								colour={data.coverImage.color}
							/>
						</div>
						<div className='flex items-center justify-center w-3/12'>
							<StatusPopup />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
