import { Profile } from "../../type"
import { format } from 'date-fns';

export default function Card({ streamer }: { streamer: Profile }) {
    return (
        <div className="flex p-5 bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <img className="w-40 h-auto rounded-xl" src={streamer.profile_image_url} alt="Imagem" />
            <div className="p-2 md:p-5">
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                    {streamer.streamer_id}
                </p>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {streamer?.streamer_username}
                </h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                    Last Seen: {format(streamer.created_at, 'dd/MM/yy HH:mm')}
                </p>
                <p className="mt-5 text-xs text-gray-500 dark:text-gray-500">
                    Total messages count: {streamer.totalMessagesCount}
                </p>
            </div>
        </div>
    )
}