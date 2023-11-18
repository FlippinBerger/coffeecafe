import { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";


export const meta: MetaFunction = () => [{ title: "Remix Notes for Rachel" }];

export default function NoteIndexPage() {
  return (
    <p>
      No note selected. Select a note on the left, or{" "}
      <Link to="new" className="text-blue-500 underline">
        create a new note.
      </Link>
    </p>
  );
}
