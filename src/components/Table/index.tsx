import { BodyTable, TableProps } from "../../pages/Streamers";
import Button from "../Button";

export default function Table({ data }: { data: TableProps }) {
    return (
        <>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border overflow-hidden dark:border-gray-700">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead>
                                    <tr className="divide-x">
                                        {data.header.map((head: string) => (
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase" key={head}>{head}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {data.body.map((row: BodyTable) => (
                                        <tr key={row.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200" >{row.id}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200" >{row.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                <Button textButton={row.textActionButton} url={row.urlActionButton} idProfile={row.id} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}