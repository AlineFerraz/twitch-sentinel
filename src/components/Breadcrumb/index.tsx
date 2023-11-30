import { useLocation } from "react-router-dom";

const Breadcrumb: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <>
            <ol className="flex items-center whitespace-nowrap pb-5" aria-label="Breadcrumb">
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                    return last ? (
                        <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate dark:text-gray-200" aria-current="page" key={value}>
                            {value.toUpperCase()}
                        </li>
                    ) : (
                        <li className="inline-flex items-center" key={value}>
                            <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:focus:text-blue-500" href={to}>
                                {value.toUpperCase()}
                                <svg className="flex-shrink-0 mx-2 overflow-visible h-4 w-4 text-gray-400 dark:text-neutral-600 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </a>
                        </li>
                    );
                })}

            </ol>

        </>
    )
}

export default Breadcrumb