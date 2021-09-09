import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from '../'

import SchoolIcon from '../../Assets/icons/SchoolIcon.png'
import LogoutIcon from '../../Assets/icons/LogoutIcon.png'
const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={SchoolIcon} alt='School Icon' width="40" title="مدارس" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt='Logout Icon' width="40" title="خروج" />
            </div>
        </div>
    </div>
)
const SchoolHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">ارتباط بین مدارس</p>
    </div>
)
const ChannelListsContainer = () => {
    return (
        <>
            <SideBar />
            <div className="channel-lists__list__wrapper">
                <SchoolHeader />
                <ChannelSearch />
                <ChannelList filters={{}}
                    List={(listProps) => (
                        <TeamChannelList {...listProps} type="team" error={false} />
                    )}
                    Preview={(previewProps) => <TeamChannelPreview {...previewProps}
                        type="team" />} />
                <ChannelList filters={{}}
                    List={(listProps) => (
                        <TeamChannelList {...listProps} type="messaging" error={false} />
                    )}
                    Preview={(previewProps) => <TeamChannelPreview {...previewProps}
                        type="messaging" />} />
            </div>
        </>
    )
}

export default ChannelListsContainer
