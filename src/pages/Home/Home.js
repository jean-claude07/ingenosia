import axios from 'axios';
import React, { Component } from 'react'
import HomeDetail from './HomeDetail';

export class Home extends Component {
    state = {
        societe: [],
        display: false
    }

    componentDidMount = () => {
        this.getSociete();
    }

    getSociete = () => {
        axios.get('societes').then(response => {
            this.setState({
                societe: response.data
            })
        })
    }
    render() {
        const sos = this.state.societe;
        return (
            <>
                <div class="container pt">
                    <div class="row mt ">
                        <div className="container">
                            <h3 class="font-weight-bolder">Liste des societés : </h3>
                            <br />
                        </div>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">date</th>
                                    <th scope="col">Nom </th>
                                    <th scope="col">type</th>
                                    <th scope="col">ville</th>
                                    <th scope="col">code postale</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sos && sos.map(soc => {

                                    return (
                                        <tr>
                                            <HomeDetail fun={this.getSociete} soci={soc} />
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default Home
