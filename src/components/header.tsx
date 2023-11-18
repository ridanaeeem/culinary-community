import { Logo } from './logo';

export const Header = () => {
    return (
        <header className="bg-gray-light p-5 w-full flex justify-between items-center z-10">
            <Logo />
        </header>
    );
};
