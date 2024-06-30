// import { FormEvent, useState } from "react";

// function CreateUser() {
//   const [username, setUsername] = useState("");

//   function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>👋 Welcome! Please start by telling us your name:</p>

//       <input
//         type="text"
//         placeholder="Your full name"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />

//       {username !== "" && (
//         <div>
//           <button>Start ordering</button>
//         </div>
//       )}
//     </form>
//   );
// }

// export default CreateUser;

import { FormEvent, useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input mb-8 w-72"
      />

      {username !== "" && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
