import React, { useState } from 'react';
import HeaderComp from '../components/headerComp';
import NavbarComp from '../components/navbarComp';
import ViewComp from '../components/ViewComp';

export default function Management() {
    const [popup, setPopup] = useState(false);

    const handleBtn = () => {
        setPopup(!popup);
    };

    const handleClosePopup = () => {
        setPopup(false);
    };

    // Mock data for the table
    const tableData = [
        {
            header1: 'Data 1',
            header2: 'Data 2',
            header3: 'Data 3',
        },
        {
            header1: 'Data 4',
            header2: 'Data 5',
            header3: 'Data 6',
        },
        {
            header1: 'Data 7',
            header2: 'Data 8',
            header3: 'Data 9',
        },
        {
            header1: 'Data 10',
            header2: 'Data 11',
            header3: 'Data 12',
        },
        {
            header1: 'Data 13',
            header2: 'Data 14',
            header3: 'Data 15',
        },
        {
            header1: 'Data 16',
            header2: 'Data 17',
            header3: 'Data 18',
        },
    ];

    return (
        <section className="flex flex-col w-screen h-screen relative">
            <div className="relative">
                <header className="z-10 absolute w-full">
                    <HeaderComp />
                </header>
                <div className="ml-80 mt-14 h-[calc(100vh - 3.25rem)] px-4 py-2 z-0">
                    {popup && <ViewComp onClose={handleClosePopup} />}
                    <div className="flex">
                        <button className="border-2 h-10 w-20 rounded-xl border-theme text-theme bg-primary shadow-lg hover:border-success hover:text-success">
                            Create
                        </button>                        
                    </div>
                    {/* Table */}
                    <table className="border-collapse border border-theme mt-4 w-full">
                        <thead>
                            <tr className="bg-primary text-theme">
                                <th className="border border-theme px-4 py-2">Header 1</th>
                                <th className="border border-theme px-4 py-2">Header 2</th>
                                <th className="border border-theme px-4 py-2">Header 3</th>
                            </tr>
                        </thead>
                        <tbody>

                        {/* Display "No data found" message if tableData is empty */}
                        {tableData.length === 0 ? (
                            <tr>
                                <td colSpan={3} className="text-center py-4">
                                    <h1 className="text-theme semibold">No data found</h1>
                                </td>
                            </tr>
                        ) : (
                            /* Map over the tableData array to generate rows */
                            tableData.map((data, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ? 'bg-background text-theme' : 'bg-primary text-theme'}
                                >
                                    <td className="border border-theme px-4 py-2">
                                        <div className="flex justify-between items-center">
                                            {data.header1}
                                            <button onClick={handleBtn}>test</button>
                                        </div>
                                    </td>
                                    <td className="border border-theme px-4 py-2">
                                        <div className="flex justify-between items-center">
                                            {data.header2}
                                            <button onClick={handleBtn}>test</button>
                                        </div>
                                    </td>
                                    <td className="border border-theme px-4 py-2">
                                        <div className="flex justify-between items-center">
                                            {data.header3}
                                            <button onClick={handleBtn}>test</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
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
