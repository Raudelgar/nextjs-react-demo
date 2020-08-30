import React, { useState } from 'react';

export default function Price({ bpi }) {
	const [currency, setCurrency] = useState('USD');
	const { code, symbol, rate, description } = bpi[currency];
	return (
		<div>
			<ul className='list-group'>
				<li className='list-group-item'>
					<div>
						Bitcoin rate for {description}:{' '}
						<span className='badge badge-info'>{code}</span>{' '}
						<strong>{rate}</strong>
					</div>
				</li>
			</ul>
			<hr className='badge-info' />
			<select
				className='form-control btn-secondary '
				onChange={(e) => setCurrency(e.target.value)}
			>
				<option className='dropdown-item' value='USD'>
					USD
				</option>
				<option className='dropdown-item' value='GBP'>
					GBP
				</option>
				<option className='dropdown-item' value='EUR'>
					EUR
				</option>
			</select>
		</div>
	);
}
