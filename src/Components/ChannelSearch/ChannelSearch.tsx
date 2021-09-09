import React, { useState, useEffect } from 'react'
import searchIcon from '../../Assets/icons/searchIcon.png'
const ChannelSearch = (): JSX.Element => {
    const [query, setQuery] = useState<string>('')
    const searchChannel = async (text: string) => {
        try {
            // TODO:search channel
        } catch (error) {
            setQuery('')
        }
    }
    const pushQueryToState = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setQuery(event.target.value)
        searchChannel(event.target.value)
    }
    return (
        < div className="channel-lists__search" >
            <div className="channel-lists__input__wrapper">
                <div className="channel-lists__input__icon">
                    <img src={searchIcon} alt="SearchIcon" width="20"
                        className="channel-lists__icon" />
                </div>
                <input type="text" className="channel-lists__input__text"
                    value={query}
                    onChange={pushQueryToState}
                    placeholder="جست و جوی چت"
                />
            </div>
        </div >
    )
}

export default ChannelSearch
