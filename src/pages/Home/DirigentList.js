import axios from 'axios';
import React, { Component } from 'react'

export class DirigentList extends Component {
    state = {
        dirigeant: []
    }

    componentDidMount = () => {
        this.getDir();
    }

    getDir = () => {
        axios.get('dirigeants').then(resp => {
            this.setState({
                dirigeant: resp.data
            })
        })
    }

    delete = (id) => {
        axios.delete(`dirigeants/${id}`).then(resp => {
            if (resp.status === 204) {
                this.getDir();
            }
        })
    }
    render() {
        const dir = this.state.dirigeant
        return (
            <>
                <div class="container pt">
                    <div class="row mt ">
                        <div className="container">
                            <h3 class="font-weight-bolder">Liste des dirigeants : </h3>
                            <br />
                        </div>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Nom et prenom</th>
                                    <th scope="col">sexe</th>
                                    <th scope="col">email</th>
                                    <th scope="col">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dir && dir.map(d => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{d.name} </th>
                                                <td>{d.sexe} </td>
                                                <td>{d.email} </td>
                                                <td>
                                                    <div class="btn-group" role="group" aria-label="Basic example">
                                                        <button onClick={() => { this.delete(d.id) }} type="button" class="btn btn-danger">Delete</button>
                                                    </div>
                                                </td>
                                            </tr>

                                        </>
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

export default DirigentList
