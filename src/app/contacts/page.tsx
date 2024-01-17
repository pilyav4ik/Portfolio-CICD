import { GetStaticPaths, GetStaticProps } from 'next';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contacts page',
    description: 'Contacts page description',
}


const page = () => {
    return (
        <div className='text-white'>
            Contacts
        </div>
    );
}


export default page;