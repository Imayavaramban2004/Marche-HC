import {useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const Layouts = ({ children, title }) => {
    useEffect(() => {
        document.title = title;
    }, [])
    return (
        <>
            <Header />
            
            <div className='spacedivider'>{children}</div>
            
            <Footer />
        </>
    )
}
