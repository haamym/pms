import HeaderComp from '../components/headerComp';
import NavbarComp from '../components/navbarComp';

export default function finance() {
    return (
        <section className="flex flex-col w-screen h-screen relative">
            <div className="relative">
                <header className="z-10 absolute w-full">
                    <HeaderComp />
                </header>
                <div className="ml-80 mt-14 h-[calc(100vh - 3.25rem)] px-4 py-2 z-0">
                    {/* Put Buttons Here */}
                    <div className="flex flex-row space-x-2">
                        <button className="border-2 h-10 w-20 rounded-xl border-theme text-theme bg-primary shadow-lg hover:border-success hover:text-success">Create</button>
                        <button className="border-2 h-10 w-20 rounded-xl border-theme text-theme bg-primary shadow-lg hover:border-success hover:text-success">Read</button>
                        <button className="border-2 h-10 w-20 rounded-xl border-theme text-theme bg-primary shadow-lg hover:border-success hover:text-success">Update</button>
                        <button className="border-2 h-10 w-20 rounded-xl border-theme text-theme bg-primary shadow-lg hover:border-success hover:text-success">Delete</button>
                    </div>
                    {/* Empty Table */}
                    <table className="border-collapse border border-theme mt-4 w-full">
                        <thead>
                            <tr className="bg-primary text-theme">
                                <th className="border border-theme px-4 py-2">Header 1</th>
                                <th className="border border-theme px-4 py-2">Header 2</th>
                                <th className="border border-theme px-4 py-2">Header 3</th>
                                {/* Add more headers as needed */}
                            </tr>
                        </thead>
                        <tbody>
                            {/* Add rows here */}
                            <tr className="bg-background text-theme">
                                <td className="border border-theme px-4 py-2">Data 1</td>
                                <td className="border border-theme px-4 py-2">Data 2</td>
                                <td className="border border-theme px-4 py-2">Data 3</td>
                            </tr>
                            <tr className="bg-primary text-theme">
                                <td className="border border-theme px-4 py-2">Data 1</td>
                                <td className="border border-theme px-4 py-2">Data 2</td>
                                <td className="border border-theme px-4 py-2">Data 3</td>
                            </tr>
                            <tr className="bg-background text-theme">
                                <td className="border border-theme px-4 py-2">Data 1</td>
                                <td className="border border-theme px-4 py-2">Data 2</td>
                                <td className="border border-theme px-4 py-2">Data 3</td>
                            </tr>
                            <tr className="bg-primary text-theme">
                                <td className="border border-theme px-4 py-2">Data 1</td>
                                <td className="border border-theme px-4 py-2">Data 2</td>
                                <td className="border border-theme px-4 py-2">Data 3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="absolute top-0 left-0 h-screen z-20 w-80">
                <NavbarComp />
            </div>
        </section>
    );
}
