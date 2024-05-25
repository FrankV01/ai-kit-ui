"use client";
import React from "react";
import { useConfiguration } from "../common/ConfigurationProvider";
import { Configurations } from "../../lib/Types";
import { ConfigKeys } from "../../lib/Utilities";

// function GetExtraItems() {
//   return (
//     <>
//       <a className="nav-link" href="#">
//         Features
//       </a>
//       <a className="nav-link" href="#">
//         Pricing
//       </a>
//       <a className="nav-link disabled">Disabled</a>
//     </>
//   );
// }

export function ModernHeader() {
  // Get the configs and fill the shit in.
  const configs: Configurations = useConfiguration();
  const title = configs[ConfigKeys.siteName];

  const ShowConfigs = () => (
    <div>
      <pre>{JSON.stringify(configs, null, 2)}</pre>
    </div>
  );

  return (
    <div className={"row"}>
      <header className={"col"}>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              {title || "AI - Kit White Label"}
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
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
