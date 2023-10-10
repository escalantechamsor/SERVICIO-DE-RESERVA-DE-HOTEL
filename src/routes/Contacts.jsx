import { Form } from "react-router-dom";

export default function Contact() {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/300/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div
      id="contact"
      className="shadow-2xl w-[350px] min-h-[50vh] p-3 ml-20 flex flex-col items-center rounded-2xl"
    >
      <div className="">
        <img
          className="rounded-md"
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div className="flex flex-col w-full p-3 items-center">
        <h1 className="text-xl p-2 font-semibold">
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div className="flex">
          <Form action="edit">
            <button
              className="py-2 px-5 shadow-xl rounded-2xl text-sky-400"
              type="submit"
            >
              Edit
            </button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button
              className="py-2 px-5 shadow-xl rounded-2xl mx-2 text-red-400"
              type="submit"
            >
              Delete
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite(contact) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
