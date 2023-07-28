

export default function Table(){




    return(
        <div className="w-4/5">
            <table className="w-4/5">
                <thead className="w-[5rem]">
                    <tr className="flex justify-between">
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr className="flex justify-between">
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr className="flex justify-between">
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
}