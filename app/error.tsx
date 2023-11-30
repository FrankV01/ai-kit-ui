"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>
        <em>Poem</em>: Something went wrong.
      </h2>
      <p>
        Oh, something went wrong, a twist in fate&apos;s song, A stumble, a
        glitch, where did we belong? The plans laid out, in steps clear and
        strong, Now scattered like whispers, lost in the throng.
      </p>

      <p>
        A hiccup, a blunder, a moment awry, A puzzle piece missing, up in the
        sky. The path we trod, with hope held high, Now dances askew, beneath
        the wry.
      </p>

      <p>
        But in this chaos, a chance to see, The beauty in flaws, the
        possibility. For within mishaps, a doorway may be, To new discoveries,
        untamed and free.
      </p>

      <p>
        So let us embrace this unforeseen bane, Forge new directions, from loss
        and gain. For in the realm of the unknown domain, Lie treasures untold,
        yet to ascertain.
      </p>

      <p>
        Oh, something went wrong, a curious tale, Yet within its grasp, new
        stories prevail. Through twists and turns, we chart our sail, In
        life&apos;s grand journey, where fates regale.
      </p>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
