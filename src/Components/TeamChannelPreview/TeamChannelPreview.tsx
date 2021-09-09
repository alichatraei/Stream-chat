import React from 'react'
import { Avatar, useChatContext } from 'stream-chat-react'

const TeamChannelPreview: React.FC<any> = ({ channel, type }) => {
    const { channel: activeChannel, client } = useChatContext()
    const GroupPreview = () => (
        <p className="Group-preview__item">
            # {channel?.data?.name || channel?.data?.id}
        </p>
    )
    const DirectPreview = () => {
        const members: any = Object.values(channel.state.members)
            .filter((member: any) => member?.user?.id !== client?.userID)
        console.log(members)
        return (
            <div className="channel-preview__item__single">
                <Avatar
                    image={members[0]?.user?.image}
                    name={members[0]?.user?.fullName}
                    size={24} />
            </div>
        )
    }
    return (
        <div className={channel?.id === activeChannel?.id ? 'channel-preview__wrapper__selected' :
            'channel-preview__wrapper'}
            onClick={() => { console.log('ok') }}>
            {type === 'team' ? <GroupPreview /> : <DirectPreview />}
        </div>
    )
}

export default TeamChannelPreview
