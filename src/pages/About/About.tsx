import { Divider, List, Typography } from 'antd'
import { useContext, useEffect, useState } from 'react'
import { StandardLayout } from '../../layout/StandardLayout'
import { UserContext } from '../../context'
import { useNavigate } from 'react-router-dom'
import { EditModal } from '../../components/Profile/EditModal'

export const About: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [loadingEdit, setLoadingEdit] = useState<boolean>(false)
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const navigate = useNavigate()
    const data = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil illo voluptatibus quam ipsum enim, maxime tempore autem earum amet.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis est quia et libero minima maxime earum corrupti enim commodi! Autem veritatis mollitia, ad molestias iure laborum est rerum suscipit praesentium?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ea iste minus? Fugiat praesentium quaerat ipsum delectus, cumque consectetur. Magnam nulla quam tempora explicabo libero!',
    ];
    useEffect(() => {
        setTimeout(() => {
            // SIMULASI GET DATA
            setLoading(false)
        }, 1000)
    }, [data])

    return (
        <StandardLayout>
            <div className='bg-gradient-to-b from-slate-900 via-slate-600 to-white min-h-screen'>
                <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-8">
                        <a onClick={() => navigate('/')} className="flex items-center">
                            <img src="../../src/resources/logo_negative.png" className="mr-3 h-12" alt="Flowbite Logo" />
                            <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Why Choose Construct.ly</span>
                        </a>
                        <button id="mega-menu-full-image-button" data-collapse-toggle="mega-menu-full-image" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full-image" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div id="mega-menu-full-image-dropdown" className="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
                        <div className="grid py-5 px-4 mx-auto max-w-screen-xl text-sm text-gray-500 dark:text-gray-400 md:grid-cols-2 md:px-6" style={{ gridGap: 20 }}>
                            <ul className="block mb-8 space-y- " aria-labelledby="mega-menu-full-image-button">
                                <li>
                                    <List className='text-white'
                                        size="large"
                                        bordered
                                        dataSource={data}
                                        renderItem={item => <List.Item className='text-white'>{item}</List.Item>}
                                    />
                                </li>
                            </ul>

                            <div className="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken" style={{ backgroundImage: "../../src/resources/logo.png" }}>
                                <img src="../../src/resources/constructiontools.jpg" className="mr-3 h-12 mb-4" alt="Construction Planing" style={{ width: '100%', height: 'auto' }} />
                                <div className='text-center'>
                                    <button type="button" className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700" onClick={() => navigate('./plan')}>
                                        Start Planing
                                        <svg className="ml-1 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </StandardLayout>
    )
}
