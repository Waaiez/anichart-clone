import { useEffect, useState } from 'react';

import NavbarMD from './NavbarMD';
import NavbarSM from './NavbarSM';
import { animeSeason } from '../../lib/animeSeason';
import { useRouter } from 'next/router';

export default function Navbar() {
	const router = useRouter();

	const [fullSeason, setFullSeason] = useState('');
	const [path, setPath] = useState('');

	const { season } = animeSeason();

	useEffect(() => {
		router.query.season && setFullSeason(router.query.season);
		setPath(router.pathname.split('/')[1]);
	}, [router.query.season, router.pathname]);

	return (
		<>
			<NavbarSM
				season={season}
				currentPath={path}
				currentLocation={fullSeason}
			/>

			<NavbarMD
				season={season}
				currentPath={path}
				currentLocation={fullSeason}
			/>
		</>
	);
}
