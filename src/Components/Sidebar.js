import React from 'react';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import '../Styles/Sidebar.css';
import { useStateValue } from '../DataLayer/StateProvider';

function Sidebar() {
	const [{ user }, dispatch] = useStateValue();
	return (
		<div className="sidebar">
			<SidebarRow src={user.photoURL} title={user.displayName} />
			<SidebarRow Icon={EmojiFlagsIcon} title="COVID-19 Information Center" />
			<SidebarRow Icon={PeopleIcon} title="Pages" />
			<SidebarRow Icon={ChatIcon} title="Friends" />
			<SidebarRow Icon={StorefrontIcon} title="Messenger" />
			<SidebarRow Icon={VideoLibraryIcon} title="Marketplace" />
			<SidebarRow Icon={LocalHospitalIcon} title="Videos" />
			<SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
		</div>
	);
}

export default Sidebar;
