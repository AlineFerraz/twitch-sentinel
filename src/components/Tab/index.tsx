export default function Tab({ children }: any) {
    console.log(children);
    return (
        <>
            <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex space-x-2" aria-label="Tabs" role="tablist">
                    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active" id="tabs-with-underline-item-1" data-hs-tab="#tabs-with-underline-1" aria-controls="tabs-with-underline-1" role="tab">
                        Metrics
                    </button>
                    <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500" id="tabs-with-underline-item-2" data-hs-tab="#tabs-with-underline-2" aria-controls="tabs-with-underline-2" role="tab">
                        Top Chatters
                    </button>
                </nav>
            </div>

            <div className="mt-3">
                <div id="tabs-with-underline-1" role="tabpanel" aria-labelledby="tabs-with-underline-item-1">
                    <p className="text-gray-500 dark:text-gray-400">
                        This is the <em className="font-semibold text-gray-800 dark:text-gray-200">first</em> item's tab body.
                    </p>
                </div>
                <div id="tabs-with-underline-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-underline-item-2">
                    <p className="text-gray-500 dark:text-gray-400">
                        This is the <em className="font-semibold text-gray-800 dark:text-gray-200">second</em> item's tab body.
                    </p>
                </div>
            </div>
        </>
    )
}