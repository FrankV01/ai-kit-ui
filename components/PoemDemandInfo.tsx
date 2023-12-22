import Link from "next/link";
import * as Icons from "react-bootstrap-icons";
import { Container, Stack } from "react-bootstrap";

export function PoemDemandInfo() {
  return (
    <div className={"mb-3"}>
      <h5 className={"text-body-secondary"}>Demand-a-Poem</h5>
      <p>Let's the Poembot AI write it's own poem while you watch.</p>
    </div>
  );
}
