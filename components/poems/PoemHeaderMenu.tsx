"use client";
import * as Icons from "react-bootstrap-icons";
import {
  IconGitHub,
  IconLinkedIn,
  IconTheOpenSourceUorg,
} from "../common/Icons";
import LoginButton from "../stateful/LoginButton";

const sizeOfIcons = "2rem";
function PoemHeaderMenu({ topic }: { topic: string }) {
  return (
    <nav
      role={"navigation"}
      className={
        "navbar navbar-expand-lg bg-primary text-light shadow rounded-bottom"
      }
    >
      <div className={"container"}>
        <a
          className={"navbar-brand"}
          data-testid={"topic-h3-brand-link"}
          href="/"
        >
          <h3>
            <div className={"text-capitalize text-secondary"}>{topic}</div>{" "}
            Poems
          </h3>
        </a>

        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={"collapse navbar-collapse"} id="navbarNav">
            <ul className="navbar-nav me-auto m-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <Icons.HouseHeartFill size={sizeOfIcons} title={"Poems"} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tag-list">
                  <Icons.TagsFill size={sizeOfIcons} title={"Tag List"} />
                </a>
              </li>
              <li className="nav-item">
                <IconLinkedIn className={"nav-link"} size={sizeOfIcons} />
              </li>
              <li className="nav-item">
                <IconGitHub className={"nav-link"} size={sizeOfIcons} />
              </li>
              <li className="nav-item">
                <IconTheOpenSourceUorg
                  className={"nav-link"}
                  size={sizeOfIcons}
                />
              </li>
            </ul>
          </div>
        </div>

        <span className={"navbar-text"}>
          <LoginButton />
        </span>
      </div>
    </nav>
  );
}

export default PoemHeaderMenu;
