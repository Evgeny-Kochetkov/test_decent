import { notFound } from 'next/navigation'

import { СountryItem } from '@/components/common/countryItem'
import restcountriesServise from '@/http/restcountriesServise'


async function getData(name: string) {
	try {
		const response = await restcountriesServise.countryItem(name.replace(/_/g, ' '))
		return response.data
	} catch (error) {
	  	console.log(error)
        notFound()
	}
}

export default async function AutoPage ({
    params: { id },
}: {
    params: { id: string }
}) {

    const autoItem = await getData(id)

    return (
        <СountryItem item={autoItem[0]}/>
    )
}