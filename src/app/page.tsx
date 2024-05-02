import { MainScreen } from '@/components/common/mainScreen'
import { Countries } from '@/components/common/countries'

import restcountriesServise from '@/http/restcountriesServise'

async function getData() {
	try {
		const response = await restcountriesServise.countries()
		return response.data
	} catch (error) {
	  	console.log(error)
	}
}

export default async function Home() {
	const countries = await getData()
	
	return (
		<main>
			<MainScreen/>
			{countries ?
				<Countries countries={countries}/>
				: 
				<div style={{'display': 'flex', 'justifyContent': 'center', 'fontSize': '34px', 'marginTop': '40px'}}>
					Server error
				</div>
			}
		</main>
	)
}