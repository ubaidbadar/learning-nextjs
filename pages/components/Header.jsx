import Link from 'next/link';
import styles from './header.module.scss';


const Header = () => {
    return (
        <header className='bg-blue-400 text-white p-4'>
            <ul className={`flex gap-4 ${styles.links}`}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/contact-us">Contact US</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;