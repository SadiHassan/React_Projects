import React, { useState , useEffect} from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppsIcon from '@material-ui/icons/Apps'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'

import SidebarOption from './SidebarOption'
import db from './firebase'

function Sidebar() {

    const [channels, setChannels ] = useState([])
    useEffect (() => {
        // Run this code ONCE when the sidebar component loads
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                name: doc.data().name
            })))
        ))
    }, []) // empty bracket means run it once
    // if we add any variable in this bracket say, like [name, age]
    // this code will run whenever those variable changes

    return (
        <div className = "sidebar">
            <div className = "sidebar__header">
                <div className = "sidebar__info">
                    <h2>Test</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Moury Shingho
                    </h3>
                </div>
                <CreateIcon />
            </div> {/* Sidebar Header Ends */}

            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Save items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add channels" />

            {/* Connect to dB and list all the channels*/}
            {/*  <SidebarOption.../> */}
            { channels.map(channel => {
                return <SidebarOption title={channel.name} id={channel.id} />
            })}
        </div>
    )
}

export default Sidebar;