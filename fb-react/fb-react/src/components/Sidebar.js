import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlaglIcon from '@material-ui/icons/EmojiFlags'
import PeoplelIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
/*import { useStateValue } from '../StateProvider'*/

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarRow src = "https://api.time.com/wp-content/uploads/2015/10/macgyver.jpg?w=800&quality=85" title="Sadi" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlaglIcon} title="Pages" />
            <SidebarRow Icon={PeoplelIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="More" />
        </div>
    )
}

export default Sidebar
