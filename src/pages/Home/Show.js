import axios from 'axios'
import React, { Component } from 'react'


export class Show extends Component {
    state = {
        societe: {}
    }

    componentDidMount = () => {
        this.getSociete()
    }

    getSociete = () => {
        axios.get(`societes/${this.props.ide.match.params.id}`).then(response => {
            this.setState({
                societe: response.data
            })
        })
    }
    render() {
        const sos = this.state.societe
        const date = new Date(sos.created_at)
        return (
            <>
                <div class="container pt">
                    <div class="row mt ">
                        <div class="card">
                            <div class="card-header">
                                <h2> {sos.nom} </h2>
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <div class="card" >
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item"><strong>code postale :</strong> {sos.codepostal} </li>
                                            <li class="list-group-item"><strong>type :</strong> {sos.category} </li>
                                            <li class="list-group-item"><strong>ville :</strong> {sos.ville} </li>
                                        </ul>
                                    </div>
                                    <strong>Description </strong>    <p>
                                        {sos.description}
                                    </p>
                                    <footer class="blockquote-footer">{date.toDateString()} <cite title="Source Title"> à {date.toLocaleTimeString()} </cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Show
