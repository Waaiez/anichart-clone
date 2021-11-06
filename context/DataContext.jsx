import React, { useContext, useEffect, useState } from 'react';

import { getPreviousSeason } from '../lib/animeSeason';
import search from '../pages/api/anilist-api/queries/season';

const DataContext = React.createContext();

export function useData() {
	return useContext(DataContext);
}

export function DataProvider({ children }) {
	const [dataTV, setDataTV] = useState();
	const [dataTV_Short, setDataTV_Short] = useState();
	const [dataMovie, setDataMovie] = useState();
	const [dataLeftovers, setDataLeftovers] = useState();
	const [dataLeftoversOther, setDataLeftoversOther] = useState();
	const [dataOther, setDataOther] = useState();

	const [error, setError] = useState();

	async function getData(season, storedSortOption) {
		setDataTV();
		setDataTV_Short();
		setDataMovie();
		setDataLeftovers();
		setDataLeftoversOther();
		setDataOther();
		setError();

		const [currentSeason, currentSeasonYear] = season.split('-');
		const { previousSeason, previousSeasonYear } = getPreviousSeason(
			currentSeason,
			currentSeasonYear
		);

		const data = await search({
			season: currentSeason,
			year: currentSeasonYear,
			previousSeason: previousSeason,
			previousYear: previousSeasonYear,
			page: 1,
			sort: storedSortOption,
		});
		console.log('res', data);

		if (data.error) {
			setError(data.error);
			setDataTV([]);
			setDataTV_Short([]);
			setDataMovie([]);
			setDataLeftovers([]);
			setDataLeftoversOther([]);
			setDataOther([]);
		} else {
			setError();
			setDataTV(data.tv.media);
			setDataTV_Short(
				data.rest.media.filter((x) => x.format === 'TV_SHORT')
			);
			setDataMovie(data.rest.media.filter((x) => x.format === 'MOVIE'));
			setDataLeftovers(
				data.leftovers.media.filter((x) => x.format === 'TV')
			);
			setDataLeftoversOther(
				data.leftovers.media.filter(
					(x) =>
						x.format !== 'TV' &&
						x.format !== 'TV_SHORT' &&
						x.format !== 'MOVIE'
				)
			);
			setDataOther(
				data.rest.media.filter(
					(x) => x.format !== 'TV_SHORT' && x.format !== 'MOVIE'
				)
			);

			dataLeftoversOther &&
				setDataOther([
					...new Set([...dataOther, ...dataLeftoversOther]),
				]);
		}
	}

	const value = {
		dataTV,
		dataTV_Short,
		dataMovie,
		dataLeftovers,
		dataOther,
		getData,
		error,
	};

	return (
		<DataContext.Provider value={value}>{children}</DataContext.Provider>
	);
}
