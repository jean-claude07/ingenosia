import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

export class AddSociete extends Component {
    state = {
        cp: null,
        ville: '',
        description: '',
        message: null,
        error: null
    }

    handleCp = (e) => {

        this.setState({
            cp: e.target.value
        })
    }

    handleChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handleVille = (e) => {

        this.setState({
            ville: e.target.value
        })

    }
    render() {
        console.log(this.state.error)
        return (
            <>
                <div class="row mt">
                    <div class="col-lg-8 col-lg-offset-2">
                        <div >
                            {this.state.message ? (
                                <>
                                    <div class="alert alert-success" role="alert">
                                        {this.state.message}
                                    </div>
                                </>
                            ) : (
                                    <>
                                        {this.state.error ? (
                                            <>
                                                <div class="alert alert-danger" role="alert">
                                                    {this.state.error}
                                                </div>
                                            </>
                                        ) : null}
                                    </>
                                )}
                        </div>
                        <Formik
                            initialValues={{
                                nom: '',
                                description: '',
                                category: '',
                                codepostal: '',
                                ville: ''
                            }}

                            onSubmit={(value, { resetForm }) => {

                                const data = new FormData();
                                data.append('nom', value.nom)
                                data.append('description', this.state.description)
                                data.append('category', value.category)
                                data.append('codepostal', this.state.cp)
                                data.append('ville', this.state.ville)
                                axios.post('societes', data).then(response => {
                                    console.log(response.data)
                                    if (response.status === 201) {

                                        resetForm();
                                        this.setState({
                                            message: 'Enregistrer avec succée !'
                                        })
                                    } else {
                                        this.setState({
                                            error: 'Veuiller reformuler'
                                        })
                                    }
                                })
                            }}
                        >
                            <Form role="form">
                                <div class="form-group">
                                    <Field type="text" name="nom" class="form-control" id="NameInputEmail1" placeholder="Nom de la société " required />
                                    <br />
                                </div>

                                <textarea name="description" onChange={this.handleChange} class="form-control" required rows="6" placeholder="Description de la société "></textarea>
                                <br />
                                <div className="col-sm-4 col-lg-offset-2">

                                    <select name="codepostal" onChange={this.handleCp} required class="form-control" aria-label="Default select example">
                                        <option >
                                            code postal
                                        </option>
                                        <option value="C5588">C5588</option>
                                        <option value="C2255">C2255</option>
                                        <option value="C1144">C1144</option>
                                        <option value="C7744">C7744</option>
                                        <option value="M8877">M8877</option>
                                        <option value="Q9955">Q9955</option>
                                        <option value="P5500">P5500</option>
                                    </select>
                                </div>
                                <div className="col-sm-4 ">

                                    <select onChange={this.handleVille} name="ville" required class="form-control" required aria-label="Default select example">
                                        {this.state.cp ? (
                                            <>
                                                {this.state.cp === 'C5588' ? (
                                                    <>
                                                        <option value="colorado" selected >colorado</option>
                                                        <option value="san francisco">san francisco</option>
                                                        <option value="los angeles">los angeles</option>
                                                        <option value="texas">texas</option>
                                                    </>
                                                ) : (
                                                        <>
                                                            {this.state.cp === 'C2255' ? (
                                                                <>
                                                                    <option value="france">ville france</option>
                                                                    <option value="monpelier">monpelier</option>
                                                                    <option value="avinion">avinion</option>
                                                                    <option value="b13">b13</option>

                                                                </>
                                                            ) : (
                                                                    <>
                                                                        {this.state.cp === 'C1144' ? (
                                                                            <>
                                                                                <option value="chine">ville chine</option>
                                                                                <option value="bejin">bejin</option>
                                                                                <option value="tokyo">tokyo</option>
                                                                                <option value="fushan">fushan</option>

                                                                            </>
                                                                        ) : (
                                                                                <>
                                                                                    {this.state.cp === 'C7744' ? (
                                                                                        <>
                                                                                            <option value="madagascar">ville madagascar</option>
                                                                                            <option value="antananarivo">antananarivo</option>
                                                                                            <option value="mahajanga">mahajanga</option>
                                                                                            <option value="toliara">toliara</option>

                                                                                        </>
                                                                                    ) : (
                                                                                            <>
                                                                                                {this.state.cp === 'M8877' ? (
                                                                                                    <>
                                                                                                        <option value="afrique du sud">ville afrique du sud</option>
                                                                                                        <option value="bejin">benin</option>
                                                                                                        <option value="niger">niger</option>
                                                                                                        <option value="kenya">kenya</option>

                                                                                                    </>
                                                                                                ) : (
                                                                                                        <>
                                                                                                            {this.state.cp === 'Q9955' ? (
                                                                                                                <>
                                                                                                                    <option value="la reunion">ville la reunion</option>
                                                                                                                    <option value="saint marie">saint marie</option>
                                                                                                                    <option value="aeroport">aeroport</option>
                                                                                                                    <option value="musere">musere</option>

                                                                                                                </>
                                                                                                            ) : (
                                                                                                                    <>
                                                                                                                        {this.state.cp === 'P5500' ? (
                                                                                                                            <>
                                                                                                                                <option value="new york">ville new york</option>
                                                                                                                                <option value="capital">capital</option>
                                                                                                                                <option value="new jersey">new jersey</option>

                                                                                                                            </>
                                                                                                                        ) : (
                                                                                                                                <>
                                                                                                                                    <option >ville</option>
                                                                                                                                    <option value="france">france</option>
                                                                                                                                    <option value="paris">paris</option>
                                                                                                                                    <option value="madagascar">madagascar</option>
                                                                                                                                    <option value="afrique du sud">afrique du sud</option>
                                                                                                                                    <option value="new york">new york</option>
                                                                                                                                    <option value="chine">chine</option>
                                                                                                                                    <option value="la reunion">la reunion</option>
                                                                                                                                </>
                                                                                                                            )}
                                                                                                                    </>
                                                                                                                )}
                                                                                                        </>
                                                                                                    )}
                                                                                            </>
                                                                                        )}
                                                                                </>
                                                                            )}
                                                                    </>
                                                                )}
                                                        </>
                                                    )}
                                            </>
                                        ) : (
                                                <>
                                                    <option >ville</option>
                                                    <option value="france">france</option>
                                                    <option value="paris">paris</option>
                                                    <option value="madagascar">madagascar</option>
                                                    <option value="afrique du sud">afrique du sud</option>
                                                    <option value="new york">new york</option>
                                                    <option value="chine">chine</option>
                                                    <option value="la reunion">la reunion</option>
                                                </>
                                            )}
                                    </select>
                                </div>
                                <br /><br />
                                <div >
                                    <hr />
                                    <div>
                                        <label>Type de la société :</label>
                                    </div>
                                    <div className="col-sm-2">
                                        <div class="form-check form-check-inline">
                                            <Field name="category" class="form-check-input" type="checkbox" id="eurl" value="EURL" />
                                            <label class="form-check-label" for="eurl">EURL</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">

                                        <div class="form-check form-check-inline">
                                            <Field name="category" class="form-check-input" type="checkbox" id="selarl" value="SELARL" />
                                            <label class="form-check-label" for="selarl">SELARL</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">

                                        <div class="form-check form-check-inline">
                                            <Field name="category" class="form-check-input" type="checkbox" id="sa" value="SA" />
                                            <label class="form-check-label" for="sa">SA </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">

                                        <div class="form-check form-check-inline">
                                            <Field name="category" class="form-check-input" type="checkbox" id="sas" value="SAS" />
                                            <label class="form-check-label" for="sas">SAS </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">

                                        <div class="form-check form-check-inline">
                                            <Field name="category" class="form-check-input" type="checkbox" id="sarl" value="SARL" />
                                            <label class="form-check-label" for="sarl">SARL </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">

                                        <div class="form-check form-check-inline">
                                            <Field name="category" class="form-check-input" type="checkbox" id="SASU" value="SASU" />
                                            <label class="form-check-label" for="SASU">SASU </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">

                                        <div class="form-check form-check-inline">
                                            <Field name="category" class="form-check-input" type="checkbox" id="SANC" value="SNC" />
                                            <label class="form-check-label" for="SANC">SNC </label>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">

                                        <div class="form-check form-check-inline">
                                            <Field name="category" class="form-check-input" type="checkbox" id="SPC" value="SPC" />
                                            <label class="form-check-label" for="SPC">SCP </label>
                                        </div>
                                    </div>
                                </div>
                                <br />

                                <div style={{ padding: '25px' }}></div>
                                <hr />
                                <center>
                                    <button type="submit" class="btn btn-success btn-lg">Ajouter la societée </button>
                                </center>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </>
        )
    }
}

export default AddSociete
