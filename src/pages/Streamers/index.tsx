import Breadcrumb from "../../components/Breadcrumb";
import Table from "../../components/Table";

export interface BodyTable {
    id: string,
    name: string,
    textActionButton: string,
    urlActionButton: string
}

export interface TableProps {
    header: Array<string>,
    body: Array<BodyTable>
}

export default function Streamers() {

    const data: TableProps = {
        header: ['Streamer ID', 'Streamer Name', 'Actions'],
        body: [
            {
                id: '565599',
                name: 'Aline',
                textActionButton: 'Go to profile',
                urlActionButton: '/streamers/profile'
            },
            {
                id: '498542',
                name: 'Aparecida',
                textActionButton: 'Go to profile',
                urlActionButton: '/streamers/profile'
            },
            {
                id: '4156',
                name: 'Ferraz',
                textActionButton: 'Go to profile',
                urlActionButton: '/streamers/profile'
            },
            {
                id: '8746',
                name: 'Moura',
                textActionButton: 'Go to profile',
                urlActionButton: '/streamers/profile'
            }
        ]
    };

    return (
        <>
            <Breadcrumb />
            <h1>Streamer Section</h1>
            <Table data={data} />
        </>
    )
}