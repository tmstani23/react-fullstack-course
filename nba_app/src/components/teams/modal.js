import React, {Component} from 'react';
import Modal from 'react-modal';

class TeamModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }
    
    handleOpenModal = () => {
        this.setState({showModal: true})
    }

    handleCloseModal = () => {
        this.props.clearModal();
        this.setState({showModal: false})
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps)
    //     if(nextProps.team !== null) {
    //         this.setState({showModal: true})
    //     }
    // }

    static getDerivedStateFromProps(props, state) {
        if(props.team !== null) {
            return {
                showModal: true
            }
        }
        
        return null;
    }
    
    render() {
        const teamProps = this.props.team;
        console.log(teamProps);
        return (
            <>
                <Modal 
                    isOpen = {this.state.showModal}
                    ariaHideApp = {false}
                >
                    <button onClick={this.handleCloseModal}>
                        Close Modal
                    </button>
                    {
                        teamProps ?
                            <div>
                                <h3>{teamProps.name}</h3>
                                <hr />
                                <div>
                                    <div 
                                        dangerouslySetInnerHTML={{
                                            __html: teamProps.content
                                        }}
                                        className="modal_content"
                                    >

                                    </div>
                                </div>
                            </div>
                            : null
                    }
                </Modal>
            </>
        )
    }
}

export default TeamModal;