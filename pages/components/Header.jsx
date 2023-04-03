import Link from 'next/link';
import styles from './header.module.scss';
import { useAuth } from '../context/AuthContext';


const Header = () => {
    const auth = useAuth();
    console.log(auth);
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