import Layout from '../components/Layout';
import axios from 'axios';
import Price from '../components/Price';

export default function Home({ data }) {
	return (
		<Layout>
			<h1>Welcome to BitzPrice</h1>
			<p>{new Date(data.time.updated).toLocaleString()}</p>
			<p>Check current Bitcoin rate</p>
			<Price bpi={data.bpi} />
		</Layout>
	);
}

export async function getStaticProps() {
	const data = await axios
		.get('https://api.coindesk.com/v1/bpi/currentprice.json')
		.then((res) => res.data);

	// const { bpi } = data;
	return {
		props: {
			data,
		},
	};
}
