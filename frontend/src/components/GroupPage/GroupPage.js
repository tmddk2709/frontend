import React from 'react';
import {connect} from 'react-redux';

import CreateGroup from './CreateGroup'
import MyGroupList from './MyGroupList';
import SearchingGroup from './SearchingGroup';

class GroupPage extends React.Component {
	render() {
		if(!this.props.loading) {
			return (
				<p>loading...</p>
			)
		}

		return (
			<div>
				<CreateGroup />
				<SearchingGroup />
				<MyGroupList />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	loading: state.loading
})

export default connect(mapStateToProps)(GroupPage);

