import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxillary/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        constructor() {
            super();

            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        state = {
            error: null
        }
        // componentDidMount(){
        //     axios.interceptors.request.use(req => {
        //         this.setState({error: null});
        //         return req;
        //     });
        //     axios.interceptors.response.use(res => res, error => {
        //         this.setState({error: error});
        //     });
        // }

        // If this component gets removed, the interceptors will get removed as well for cleanup
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render() {
            return(
                <Aux>
                    <Modal 
                        show={this.state.error}
                        modalClosed = {this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            );
        }   
    }
}

export default withErrorHandler;