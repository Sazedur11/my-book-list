
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-1/2 mx-auto mt-50'>
            <h2 className='text-2xl font-bold mb-4'>Page not found</h2>
            <Link className='btn btn-info' to={'/'}>Back to home page</Link>
        </div>
    );
};

export default ErrorPage;