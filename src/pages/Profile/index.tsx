import Breadcrumb from "../../components/Breadcrumb";
import Card from "../../components/Card";
import Tab from "../../components/Tab";
import Table from "../../components/Table";
import { Profile } from "../../type";
import { TableProps } from "../Streamers";

export default function StreamerProfile() {

    const user: Profile = {
        streamer_id: "227168488",
        created_at: new Date(),
        profile_image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/f5c84939-a415-4654-b5da-60ff968280e6-profile_image-300x300.png",
        streamer_username: "danielhe4rt",
        totalMessagesCount: 0
    };

    const data: TableProps = {
        header: ['#', 'Username', 'Messages Sent', 'Actions'],
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
            <Card streamer={user} />

            <div className="mt-10">
                <Tab>
                    <Table data={data} />
                </Tab>
            </div>
        </>
    )
}