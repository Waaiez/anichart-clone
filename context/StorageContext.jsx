import React, { useContext, useEffect, useState } from 'react';

const StorageContext = React.createContext();

export function useStorage() {
	return useContext(StorageContext);
}

export function StorageProvider({ children }) {
	const [isLoading, setIsLoading] = useState(true);
	const [theme, setTheme] = useState();
	const [language, setLanguage] = useState();
	const [provider, setProvider] = useState();
	const [sortOption, setSortOption] = useState();

	useEffect(() => {
		setIsLoading(true);
		if (typeof window !== 'undefined') {
			if (localStorage.theme) {
				setTheme(getItem('theme'));
			} else {
				setItem('theme', 'theme-light');
				setTheme('theme-light');
			}

			if (localStorage.language) {
				setLanguage(getItem('language'));
			} else {
				setItem('language', 'romaji');
				setLanguage('romaji');
			}

			if (localStorage.provider) {
				setProvider(getItem('provider'));
			} else {
				setItem('provider', 'anilist');
				setProvider('anilist');
			}

			if (localStorage.sortOption) {
				setProvider(getItem('sortOption'));
			} else {
				setItem('sortOption', 'POPULARITY_DESC');
				setSortOption('POPULARITY_DESC');
			}
		}
		document.documentElement.classList.add(theme);
		setIsLoading(false);
	}, []);

	function getItem(name) {
		const data = window.localStorage.getItem(name);
		return data;
	}

	function setItem(name, data) {
		window.localStorage.setItem(name, data);
	}
	function setLocalTheme(name) {
		document.documentElement.classList.replace(theme, name);
		window.localStorage.setItem('theme', name);
		setTheme(name);
	}

	const value = {
		theme,
		language,
		provider,
		sortOption,
		getItem,
		setItem,
		setLocalTheme,
	};

	return (
		<StorageContext.Provider value={value}>
			{!isLoading && children}
		</StorageContext.Provider>
	);
}
