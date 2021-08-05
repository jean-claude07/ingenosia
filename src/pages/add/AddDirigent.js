import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export class AddDirigent extends Component {
    state = {
        sexe: null,
        mess: null,
        error: null
    }

    handleRadio = (e) => {
        this.setState({
            sexe: e.target.value
        })
    }
    render() {

        return (
            <>
                <div class="row mt">
                    <div class="col-lg-8 col-lg-offset-2">
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                sexe: ''
                            }}


                            onSubmit={(value, { resetForm }) => {
                                const post = new FormData();
                                post.append('name', value.name)
                                post.append('email', value.email)
                                post.append('sexe', this.state.sexe)
                                axios.post('dirigeants', post).then(resp => {
                                    if (resp.status === 201) {
                                        this.setState({
                                            mess: 'Enregistrer avec succée'
                                        });
                                        window.location.reload();
                                    } else {
                                        this.setState({
                                            error: 'Veuillez reformuler'
                                        })
                                    }
                                })
                            }}
                        >

                            <Form role="form">
                                <div class="form-group">
                                    <Field type="text" name="name" class="form-control" id="NameInputEmail1" required placeholder="Nom et Prenom " />
                                    <br />
                                </div>

                                <center>
                                    <div className="col-sm-4 col-lg-offset-2">

                                        <div class="form-check ">
                                            <input onChange={this.handleRadio} class="form-check-input" value="homme" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label class="form-check-label" for="flexRadioDefault1">Homme</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 ">

                                        <div class="form-check ">
                                            <input onChange={this.handleRadio} class="form-check-input" value="femme" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label class="form-check-label" for="flexRadioDefault2">Femme</label>
                                        </div>
                                    </div>
                                </center>
                                <br /><br />
                                <div class="form-group">
                                    <Field type="email" name="email" class="form-control" required id="subjectEmail1" placeholder="email" />
                                    <br />
                                </div>
                                <br />
                                <center>
                                    <button type="submit" class="btn btn-success btn-lg">Ajouter dirigeant </button>
                                </center>
                            </Form>
                        </Formik>
                    </div>
                </div>

            </>
        )
    }
}

export default AddDirigent
