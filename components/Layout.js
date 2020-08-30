import Head from 'next/head';
import NavBar from './NavBar';

export default function Layout({ children }) {
	return (
		<div>
			<Head>
				<title>BitzPrice</title>
			</Head>
			<NavBar />
			<div className='container'>{children}</div>
		</div>
	);
}
