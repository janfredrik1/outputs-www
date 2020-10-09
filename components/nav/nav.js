import React from 'react';
import Link from "next/link";

export default class Nav extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
                <div className="container-fluid">
                    <Link href='/'>
                        <a className="navbar-brand">
                            <img src="../img/logo.png" className="navbar-brand-img" alt="..."></img>
                        </a>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarCollapse">


                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <i className="fe fe-x"></i>
                        </button>


                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarLandings" data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false" href="#">
                                    Karriere
                                </a>
                                <div className="dropdown-menu dropdown-menu-xl p-0"
                                     aria-labelledby="navbarLandings">
                                    <div className="row no-gutters">
                                        <div className="col-12 col-lg-6">
                                            <div className="dropdown-img-left"
                                                 style={{backgroundImage: 'url(../img/photos/photo-3.jpg)'}}>


                                                <h4 className="font-weight-bold text-white mb-0">
                                                    Bli en del av teamet?
                                                </h4>


                                                <p className="font-size-sm text-white">
                                                    Kontakt oss for en kort samtale
                                                </p>


                                                <Link href='/book'>
                                                    <a className="btn btn-sm btn-white shadow-dark fonFt-size-sm">
                                                        Book telefonmøte
                                                    </a>
                                                </Link>

                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="dropdown-body">
                                                <div className="row no-gutters">
                                                    <div className="col-12">
                                                        <h6 className="dropdown-header">
                                                            Ønsker du å jobbe hos oss
                                                        </h6>
                                                        <Link href="/karriere/hva">
                                                            <a className="dropdown-item">
                                                                Hva er Cloudberries?
                                                            </a>
                                                        </Link>
                                                        <Link href="/karriere/hvorfor">
                                                            <a className="dropdown-item">
                                                                Hvorfor jobbe i Cloudberries
                                                            </a>
                                                        </Link>
                                                        <Link href="/events">
                                                            <a className="dropdown-item mb-5">
                                                                Events
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="col-12">
                                                        <h6 className="dropdown-header">
                                                            Hvordan vi jobber
                                                        </h6>
                                                        <Link href="/hvordan/onboarding">
                                                            <a className="dropdown-item">
                                                                Onboarding
                                                            </a>
                                                        </Link>
                                                        <Link href="/hvordan/neste-prosjekt">
                                                            <a className="dropdown-item">
                                                                Ditt neste prosjekt
                                                            </a>
                                                        </Link>
                                                        <Link href="/hvordan/fag">
                                                            <a className="dropdown-item">
                                                                Fagmiljøet
                                                            </a>
                                                        </Link>
                                                        <Link href="/hvordan/kompetanse">
                                                            <a className="dropdown-item">
                                                                Kompetanseheving
                                                            </a>
                                                        </Link>
                                                        <Link href="/hvordan/oppfolging">
                                                            <a className="dropdown-item">
                                                                Oppfølging
                                                            </a>
                                                        </Link>
                                                        <Link href="/hvordan/betingelser">
                                                            <a className="dropdown-item">
                                                                Lønn, utbytte og bonus
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </li>
                            <li className="nav-item ">
                                <Link href="/tjenester">
                                    <a className="nav-link" id="navbarPages"
                                       aria-haspopup="true" aria-expanded="false">
                                        Tjenester
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link href="/selskapet">
                                    <a className="nav-link dropdown-toggle" id="navbarPages" data-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false">
                                        Selskapet
                                    </a>
                                </Link>

                                <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="navbarPages">
                                    <div className="row no-gutters">
                                        <div className="col-6">
                                            <h6 className="dropdown-header">
                                                Om oss
                                            </h6>
                                            <Link href="/selskapet#historien">
                                                <a className="dropdown-item">
                                                    Historien
                                                </a>
                                            </Link>
                                            <Link href="/selskapet#formål">
                                                <a className="dropdown-item">
                                                    Formål
                                                </a>
                                            </Link>
                                            <Link href="/selskapet#verdier">
                                                <a className="dropdown-item">
                                                    Verdier
                                                </a>
                                            </Link>
                                            <Link href="/selskapet#samfunnsoppdrag">
                                                <a className="dropdown-item mb-5">
                                                    Samfunnsoppdrag
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="col-12">
                                            <h6 className="dropdown-header">
                                                Menneskene
                                            </h6>
                                            <Link href="/selskapet/konsulentene">
                                                <a className="dropdown-item">
                                                    Konsulentene
                                                </a>
                                            </Link>
                                            <Link href="/selskapet/salgsteamet">
                                                <a className="dropdown-item">
                                                    Salgsteamet
                                                </a>
                                            </Link>
                                            <Link href="/selskapet/folkene-bak">
                                                <a className="dropdown-item mb-5">
                                                    Folkene bak
                                                </a>
                                            </Link>

                                        </div>
                                        <div className="col-12">
                                            <h6 className="dropdown-header">
                                                Kontakt
                                            </h6>
                                            <Link href="/kontakt-oss">
                                                <a className="dropdown-item">
                                                    Her finner du oss
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link href="/selskapet">
                                    <a className="nav-link dropdown-toggle" id="navbarPages" data-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false">
                                        Aktuelt
                                    </a>
                                </Link>

                                <div className="dropdown-menu dropdown-menu-sm" aria-labelledby="navbarPages">
                                    <div className="row no-gutters">
                                        <div className="col-6">
                                            <h6 className="dropdown-header">
                                                Aktuelt
                                            </h6>
                                            <Link href="/aktuelt">
                                                <a className="dropdown-item">
                                                    Siste
                                                </a>
                                            </Link>
                                            <Link href="/aktuelt/nyheter">
                                                <a className="dropdown-item">
                                                    Nyheter
                                                </a>
                                            </Link>
                                            <Link href="/aktuelt/blogg">
                                                <a className="dropdown-item">
                                                    Blogg
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>


                        <Link href='/join'>
                            <a className="navbar-btn btn btn-sm btn-primary lift ml-auto">
                                Bli en del av teamet
                            </a>
                        </Link>

                    </div>

                </div>
            </nav>

        );
    }
}

