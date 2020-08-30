import Link from 'next/link';

export default function NavBar() {
	return (
		<nav className='navbar navbar-expand navbar-dark bg-primary'>
			<Link href='/'>
				<a className='navbar-brand'>BitzPrice</a>
			</Link>

			<div className=' navbar-collapse' id='navbarColor01'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<Link href='/'>
							<a className='nav-link'>
								Home <span className='sr-only'>(current)</span>
							</a>
						</Link>
					</li>
					<li className='nav-item'>
						<Link href='/about'>
							<a className='nav-link'>About</a>
						</Link>
					</li>
					<li className='nav-item'>
						<Link href='/documentation'>
							<a className='nav-link'>Next Docs</a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
