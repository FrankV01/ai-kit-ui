import styles from "./page.module.css";
import React from "react";
import ChatThree from "../components/chat/ChatThree";

/**
 * This is an indicator for Next.js
 */
export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className={styles.outline}>
      <div className="container text-center border">
        {/*<div className="row border">*/}
        {/*  <div className="col border">Column 1</div>*/}
        {/*  <div className="col border">Column 2</div>*/}
        {/*  <div className="col border">Column 3</div>*/}
        {/*</div>*/}
        <div className="row border">
          <div className="col border">&nbsp;</div>
          <div className="col border">
            What do we actually want on this page? Most data should come from
            the database. This does need to be some-what generic.
          </div>
          <div className="col border">
            <p>
              Well, personalized responses is the thing. Recording things and
              ear marking things in the conversion is where it's at. I'm looking
              at a long, permenaint history with the chat/support bot.
            </p>
            <p>
              To that end, I'd like to be able to mark up anything in the chat
              but maybe with an overlay. so I can show the layer and hide the
              layer. It should track the whole conversation and be able to show
              the whole conversation w/ relevant notes and markup.
            </p>
            <p>Leave the notes here and dev in the bottom row/col</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>
              <ChatThree />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
