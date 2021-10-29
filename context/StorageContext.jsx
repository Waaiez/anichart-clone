import React, { useContext, useState, useEffect } from 'react';

const StorageContext = React.createContext();

export function useStorage() {
	return useContext(StorageContext);
}

export function StorageProvider({ children }) {
	const [isLoading, setIsLoading] = useState(true);
	const [theme, setTheme] = useState();
	const [language, setLanguage] = useState();
	const [provider, setProvider] = useState();

	useEffect(() => {
		setIsLoading(true);

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

		document.documentElement.classList.add(theme);
		setIsLoading(false);
	}, []);

	function getItem(name) {
		const data = localStorage.getItem(name);
		return data;
	}

	function setItem(name, data) {
		localStorage.setItem(name, data);
	}
	function setLocalTheme(name) {
		document.documentElement.classList.replace(theme, name);
		localStorage.setItem('theme', name);
		setTheme(name);
	}

	const value = {
		theme,
		language,
		provider,
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
