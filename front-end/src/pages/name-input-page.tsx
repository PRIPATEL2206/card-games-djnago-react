import { useNavigate } from "react-router-dom";
import { getDataFromFormEvent } from "../utils/form/form-utils";
import { useUsername } from "../utils/hooks/name-provider"

export default function NameInputPage() {
  const { changeUsername} = useUsername();
  const navigate = useNavigate()

  function handleSubmit(form: React.FormEvent<HTMLFormElement>) {
    form.preventDefault()
    const { username } = getDataFromFormEvent(form)
    changeUsername(username)
    navigate('/mindi-game')
  }

  return (
    <div className="flex justify-center mt-4 ">
      <form className="w-1/2" onSubmit={handleSubmit}>
        <label htmlFor="first_name" className="block mb-2 font-medium text-gray-900 text-2xl">First name</label>
        <input type="text" id="first_name" name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 -400 " placeholder="John" required />
        <button type="submit" className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >Play</button>
      </form>
    </div>
  )
}
