import React from "react";
import { AiThankYou } from "../common/quips/AiThankYou";

async function ModernFooter() {
  return (
    <footer className={"container"}>
      <div className={"row"}>
        <div className={"col"}>
          <AiThankYou />
        </div>
        <div className={"col"}>Footer</div>
        <div className={"col"}>Footer</div>
      </div>
    </footer>
  );
}

async function ModernHeader() {
  return (
    <div className={"row"}>
      <header className={"col"}>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                <a className="nav-link" href="#">
                  Features
                </a>
                <a className="nav-link" href="#">
                  Pricing
                </a>
                <a className="nav-link disabled">Disabled</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export async function ModernMode() {
  return (
    <div className={"container"}>
      <ModernHeader />
      <div className={"row"}>
        <div className={"col"}> Modern Mode - White Label</div>
      </div>
      <ModernFooter />
    </div>
  );
}
