import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HomeDetail extends Component {
    handleDelete = (id) => {
        axios.delete(`societes/${id}`).then(resp => {
            if (resp.status === 204) {

                this.props.fun();
            }
        })
    }
    render() {
        const soc = this.props.soci
        const date = new Date(soc.created_at);
        return (
            <>
                <th scope="row">{date.toLocaleDateString()} </th>
                <td>{soc.nom} </td>
                <td>{soc.category} </td>
                <td>{soc.ville} </td>
                <td>{soc.codepostal} </td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <Link to={`edit/${soc.id}`} class="btn btn-secondary">Edit</Link>

                        <Link to={`show/${soc.id}`} type="button" class="btn btn-info">
                            Show
                        </Link>
                        <button onClick={() => { this.handleDelete(soc.id) }} type="button" class="btn btn-danger">Delete</button>
                    </div>
                </td>

            </>
        )
    }
}

export default HomeDetail
