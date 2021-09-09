import React, { PropsWithChildren } from 'react'

const TeamChannelList = (props: PropsWithChildren<any>) => {
    if (props.error) {
        return props.type === "team" ? (
            <div className="teamchannel-list__team__error">
                <p className="teamchannel-list__team__error__text">
                    خطا در برقراری ارتباط با سرور، مجددا سعی کنید
                </p>
            </div>
        ) : null
    }
    if (props.loading) {
        return (<div className="teamchannel-list__message__loading">
            <p className="teamchannel-list__message__loading__text">
                هیچ {props.type === "team" ? 'گروه' : 'مکالمه شخصی'} یافت نشد
            </p>
        </div>)
    }
    return (
        <div className="team-channel__list_wrapper">
            <div className="team-channel__list__header">
                <p className="team-channel__list__header_title">
                    {props.type === "team" ? 'گروه' : 'مکالمه شخصی'}
                </p>
                {/* //TODO: ADD Button */}

            </div>
            {props.children}
        </div>
    )
}

export default TeamChannelList
