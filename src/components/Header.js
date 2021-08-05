import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <>
                <div class="navbar navbar-inverse navbar-static-top">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="/">JEAN CLAUDE TEST</a>
                        </div>
                        <div class="navbar-collapse collapse">
                            <ul class="nav navbar-nav navbar-right">
                                <li><Link to="/dirigeant" className="btn btn-success btn-lg" >List des dirigeants </Link></li>
                                <li style={{ margin: '5px' }}></li>
                                <li><Link to="/ajouter" className="btn btn-primary btn-lg" ><strong>+ &nbsp;</strong>Ajouter </Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;
