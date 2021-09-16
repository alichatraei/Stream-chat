import React from 'react'
import { Channel, useChatContext } from 'stream-chat-react'
import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from '../'
const ChannelContainer: React.FC<any> = ({
    setCreateType,
    setIsCreating,
    isCreating,
    setIsEditing,
    createType,
    isEditing }) => {
    const { channel } = useChatContext();
    if (isCreating) {
        return (
            <div className="channel__container">
                <CreateChannel createType={createType} setIsCreating={setIsCreating} />
            </div>
        )
    }
    if (isEditing) {
        return (
            <div className="channel__container">
                <EditChannel setIsEditing={setIsEditing} />
            </div>
        )
    }
    const EmptyState = () => (
        <div className="channel-empty__container">
            <p className="channel-empty__first">
                این قسمت میتونی تاریخچه چت رو ببینی
            </p>
            <p className="channel-empty__second">
                میتونی پیام متنی ، فایل ، گیف و استیکر بفرستی
            </p>
        </div>
    )
    return (
        <div className="channel-container">
            <Channel
                EmptyStateIndicator={EmptyState}
                Message={(messageProps, index) => <TeamMessage key={index}
                    {...messageProps} />}>
                <ChannelInner />
            </Channel>
        </div>
    )
}

export default ChannelContainer
