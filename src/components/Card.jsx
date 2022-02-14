const Card = ({ img, title, location, map, desc, startDate, endDate }) => {
	return (
		<section className='my-8 flex flex-col md:flex-row items-center'>
			<img
				className='md:m-4 w-72 md:w-48 h-64 object-cover rounded-md'
				src={img}
				alt={title}
			/>
			<div className='px-4 py-6'>
				<header className='flex items-center gap-4'>
					<div className='flex items-center'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5 text-red-400'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
								clipRule='evenodd'
							/>
						</svg>
						<h1 className='uppercase tracking-wide font-light text-sm'>{location}</h1>
					</div>
					<a
						className='underline text-gray-500 font-light text-xs'
						href={map}
						target='_blank'
					>
						View on Google Maps
					</a>
				</header>
				<main className='space-y-2'>
					<h1 className='text-3xl font-extrabold mb-4'>{title}</h1>
					<h2 className='font-bold'>
						{startDate} - {endDate}
					</h2>
					<p>{desc}</p>
				</main>
			</div>
		</section>
	);
};

export default Card;
