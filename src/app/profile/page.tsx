import { getServerSession } from 'next-auth'
import { authConfig } from '../../../configs/auth'

export default async function Profile() {
    const session = await getServerSession(authConfig)

    return (
        <section style={{'padding': '20px 72px'}}>
            <div>
                <h1>
                    Profile of {session?.user?.name}
                </h1>
                {session?.user?.image
                    ? <img src={session.user.image} alt='avatar'/>
                    : null
                }
            </div>
        </section>
    )
}