import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { Grid, } from '@material-ui/core'

export class AddSociete extends Component {
    state = {
        cp: null,
        ville: '',
        description: '',
        message: null,
        societe: {},
        nom: ''
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

    handleNom = (e) => {
        this.setState({
            nom: e.target.value
        })
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
        const sost = this.state.societe;
        return (
            <>
                <div id="ww">

                    <div class="col-lg-6 col-lg-offset-3 centered">
                        <h3>Editer</h3>
                        <hr />
                        <br />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div class="col-lg-8 col-lg-offset-2">
                                <div >
                                    {this.state.message ? (
                                        <>
                                            <div class="alert alert-success" role="alert">
                                                {this.state.message}
                                            </div>
                                        </>
                                    ) : null}
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
                                        data.append('nom', this.state.nom)
                                        data.append('description', this.state.description)
                                        data.append('category', value.category)
                                        data.append('codepostal', this.state.cp)
                                        data.append('ville', this.state.ville)
                                        axios.patch(`societes/${this.props.ide.match.params.id}`, data).then(response => {
                                            resetForm();
                                            console.log(response.data)
                                            this.setState({
                                                message: 'Enregistrer avec succée !'
                                            })
                                        })
                                    }}
                                >
                                    <Form role="form">

                                        <div class="form-group">
                                            <input onChange={this.handleNom} type="text" name="nom" class="form-control" defaultValue={sost.nom} />
                                            <br />
                                        </div>

                                        <textarea name="description" onChange={this.handleChange} class="form-control" rows="6" defaultValue={sost.description}></textarea>
                                        <br />
                                        <div className="col-sm-4 col-lg-offset-2">

                                            <select name="codepostal" onChange={this.handleCp} defaultValue={sost.codepostal} class="form-control" aria-label="Default select example">
                                                <option >
                                                    {sost.codepostal}
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

                                            <select onChange={this.handleVille} name="ville" class="form-control" defaultValue={sost.ville} aria-label="Default select example">
                                                {this.state.cp ? (
                                                    <>
                                                        {this.state.cp === 'C5588' ? (
                                                            <>
                                                                <option value="colorado">colorado</option>
                                                                <option value="san francisco">san francisco</option>
                                                                <option value="los angeles">los angeles</option>
                                                                <option value="texas">texas</option>
                                                            </>
                                                        ) : (
                                                                <>
                                                                    {this.state.cp === 'C2255' ? (
                                                                        <>
                                                                            <option value="monpelier">monpelier</option>
                                                                            <option value="avinion">avinion</option>
                                                                            <option value="b13">b13</option>

                                                                        </>
                                                                    ) : (
                                                                            <>
                                                                                {this.state.cp === 'C1144' ? (
                                                                                    <>
                                                                                        <option value="bejin">bejin</option>
                                                                                        <option value="tokyo">tokyo</option>
                                                                                        <option value="fushan">fushan</option>

                                                                                    </>
                                                                                ) : (
                                                                                        <>
                                                                                            {this.state.cp === 'C7744' ? (
                                                                                                <>
                                                                                                    <option value="antananarivo">antananarivo</option>
                                                                                                    <option value="mahajanga">mahajanga</option>
                                                                                                    <option value="toliara">toliara</option>

                                                                                                </>
                                                                                            ) : (
                                                                                                    <>
                                                                                                        {this.state.cp === 'M8877' ? (
                                                                                                            <>
                                                                                                                <option value="bejin">benin</option>
                                                                                                                <option value="niger">niger</option>
                                                                                                                <option value="kenya">kenya</option>

                                                                                                            </>
                                                                                                        ) : (
                                                                                                                <>
                                                                                                                    {this.state.cp === 'Q9955' ? (
                                                                                                                        <>
                                                                                                                            <option value="saint marie">saint marie</option>
                                                                                                                            <option value="aeroport">aeroport</option>
                                                                                                                            <option value="musere">musere</option>

                                                                                                                        </>
                                                                                                                    ) : (
                                                                                                                            <>
                                                                                                                                {this.state.cp === 'P5500' ? (
                                                                                                                                    <>
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
                                                            <option >{sost.ville} </option>
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
                    </div>
                </div>
            </>
        )
    }
}

export default AddSociete
