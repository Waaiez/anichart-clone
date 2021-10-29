import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NavbarSM from './NavbarSM';
import NavbarMD from './NavbarMD';

function getSeason() {
	let d = new Date();
	let season = d.getMonth() + 1;
	[10, 7, 4, 1].every((val) => {
		if (season >= val) {
			season = val;
			return false;
		}
		return true;
	});
	if (season > 4) {
		return d.getFullYear() + 1;
	} else return d.getFullYear();
}

export default function Navbar() {
	const router = useRouter();

	const [fullSeason, setFullSeason] = useState('');
	const [path, setPath] = useState('');

	useEffect(() => {
		router.query.season && setFullSeason(router.query.season);
		setPath(router.pathname.split('/')[1]);
	}, [router.query.season, router.pathname]);

	return (
		<>
			<NavbarSM
				seasonYear={getSeason()}
				currentYear={new Date().getFullYear()}
				currentSeason={fullSeason}
				currentPath={path}
			/>

			<NavbarMD
				seasonYear={getSeason()}
				currentYear={new Date().getFullYear()}
				currentSeason={fullSeason}
				currentPath={path}
			/>
		</>
	);
}
