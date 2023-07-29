
import { StatusOnlineIcon} from "@heroicons/react/outline";

export default function TableComp() {


  return (
    <table className="mx-2 text-sm w-full">
      <thead className="bg-[#3ea7e2] text-left text-[white] font-bold ">
        <tr className="">
          <th className="px-4 py-3">Username</th>
          <th className="px-4 py-3">Online</th>
          <th className="px-4 py-3">Actions</th>
          <th className="px-4 py-3"></th>
        </tr>
      </thead>

      <tbody className="">
        <tr className="">
          <td className="px-4 py-3">Username</td>
          <td className="px-4 py-3">
            <StatusOnlineIcon className="h-5 w-5 text-green-500" />
          </td>
          <td className="px-4 py-3">
            action
          </td>
          <td className="px-4 py-3">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
            </button>
          </td>
        </tr>
        
      
      </tbody>

      <tfoot>
      
      </tfoot>
    </table>
  );
}
