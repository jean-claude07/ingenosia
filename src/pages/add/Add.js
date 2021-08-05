import React, { Component } from 'react'
import AddDirigent from './AddDirigent'
import AddSociete from './AddSociete'

export class Add extends Component {
    state = {
        add: false
    }
    render() {
        return (
            <>
                <div class="container pt">
                    <div class="row mt">
                        <div class="col-lg-6 col-lg-offset-3 centered">
                            <h3>AJOUTER</h3>
                            <hr />
                            <div>
                                <button type="button"
                                    class="btn btn-secondary btn-lg "
                                    aria-pressed="true"
                                    onClick={() => { this.setState({ add: false }) }}
                                >
                                    Dirigeant
                                </button>
                                &nbsp;&nbsp;
                                <button
                                    type="button"
                                    class="btn btn-info btn-lg "
                                    aria-pressed="true"
                                    onClick={() => { this.setState({ add: true }) }}
                                >
                                    Société
                                </button>
                            </div>
                        </div>
                    </div>
                    {this.state.add ? (
                        <>
                            <AddSociete />
                        </>
                    ) : (
                            <>
                                <AddDirigent />
                            </>
                        )}
                </div>

            </>
        )
    }
}

export default Add
