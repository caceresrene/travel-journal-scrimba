import Card from './components/Card';
import Nav from './components/Nav';
import data from './data';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
	return (
		<>
			<Nav />
			<main className='max-w-3xl mx-auto'>
				{data.map((place) => (
					<Card
						key={uuidv4()}
						img={place.imageUrl}
						location={place.location}
						map={place.googleMapsUrl}
						title={place.title}
						startDate={place.startDate}
						endDate={place.endDate}
						desc={place.description}
					/>
				))}
			</main>
		</>
	);
};

export default App;
