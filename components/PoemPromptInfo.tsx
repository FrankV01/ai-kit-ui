"use server";
import Link from "next/link";
import * as Icons from "react-bootstrap-icons";
import { Container, Stack } from "react-bootstrap";

export async function PoemPromptInfo() {
  return (
    <div className={"mb-3"}>
      <h5 className={"text-body-secondary"}>
        Important details for best results
      </h5>
      <p>
        The prompt should be in plain, written english. Using too many acronyms
        (I.E. &quot;AI&quot; or &quot;USA&quot;) or out-of-context terms can
        cause unexpected results.
      </p>
      <p>
        Provide a detailed, clear prompt. The more details you include, the
        closer the poem will be to your prompt. But, try to leave room for the
        AI to given a creative poem in response.
      </p>
      <p className={"text-danger-emphasis"}>
        This page <strong>does not save</strong> your writing{" "}
        <strong>until</strong> the &quot;Send To Queue&quot; button is invoked.
      </p>
      <p className={"text-danger-emphasis"}>
        As a suggestion, use Google Docs or MS Word to draft your prompt to help
        avoid data loss. Then use copy-and-paste to move the writing over.
      </p>
      <Stack>
        <div>
          <Link
            prefetch={false}
            target={"microsoft"}
            href={
              "https://support.microsoft.com/en-au/office/video-cut-copy-and-paste-1c696bda-5ea8-435c-9548-f5c59b9e1977"
            }
          >
            <Icons.Windows /> Using Copy and Paste on Windows{" "}
            <Icons.BoxArrowUpRight />
          </Link>
        </div>
        <div className={"mt-1"}>
          <Link
            href={
              "https://support.apple.com/guide/mac-help/copy-and-paste-between-devices-mchl70368996/mac"
            }
            target={"apple"}
            prefetch={false}
          >
            <Icons.Apple /> Using Copy and Paste on Mac{" "}
            <Icons.BoxArrowUpRight />
          </Link>
        </div>
      </Stack>
    </div>
  );
}
