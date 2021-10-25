import Image from 'next/image';
import loadingIcon from './loadingIcon.svg';

export default function LoadingIcon({ width, height }) {
	return (
		<Image
			src={loadingIcon}
			alt='Loading...'
			width={width}
			height={height}
		/>
	);
}
