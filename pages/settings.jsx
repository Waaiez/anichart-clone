import Head from 'next/head';
import { Navbar } from '../components';

function settings() {
	return (
		<>
			<Head>
				<title>AniChart (Unofficial): Settings</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
		</>
	);
}

export default settings;
