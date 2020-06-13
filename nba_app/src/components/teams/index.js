import React, {Component} from 'react';
import axios from 'axios';
import {URL_TEAMS} from '../utils/paths';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import TeamModal from './modal';

class Teams extends Component {
    
    state = {
        teams: [],
        filteredTeams: [],
        teamObj: null,
        searchKeyword: ''
    }

    componentDidMount() {
        axios.get(URL_TEAMS)
            .then(response => {
                this.setState({
                    teams: response.data,
                    filteredTeams: response.data
                })
            })
    }

    clearModal = () => {
        this.setState({teamObj: null});
    }

    showModalTeam = (data) => {
        this.setState({teamObj: data})
    }

    renderTeamsList = (filteredTeams) => (
        filteredTeams.map((item, index) => (
            <CSSTransition
                key={index}
                timeout={1000}
                classNames="fade"
            >
                <div 
                    className='team_item'
                    onClick={() => this.showModalTeam(item)}
                >
                    <img alt={item.name} src={`/images/teams/${item.logo}`}/>
                </div>
            </CSSTransition>
        ))
    )
    
    searchTerm = (event) => {
        
        const keyword = event.target.value;


        if( keyword !== ''){
            const list = this.state.teams.filter(item => {
                //save all items in the teams array that match the input keyword
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            })
            
            this.setState({
                filteredTeams: list,
                searchKeyword: keyword
            })

        } else {
            this.setState({
                filteredTeams: this.state.teams,
                searchKeyword: keyword
            })
        }
    }

    render() {
        //console.log(this.state.filteredTeams)
        return (
            <div className='teams_component'>
                <div className='teams_input'>
                    <input 
                        type='text'
                        value={this.state.searchKeyword}
                        onChange={event => this.searchTerm(event)}
                        placeholder='Search for a team'
                        
                    />
                </div>
                <div className='container teams_container'>
                    {/* wrap all items in list in a div */}
                    <TransitionGroup component='span'>
                        {this.renderTeamsList(this.state.filteredTeams)}
                    </TransitionGroup>
                </div>
                <TeamModal team={this.state.teamObj} clearModal = {() => this.clearModal()}/>
            </div>
            
        )
    }
}

export default Teams;