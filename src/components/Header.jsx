import { Logo } from './logo';

export const Header = () => {
    return (
        <header className="fixed bg-white p-5 w-full flex justify-between items-center z-10 shadow-md">
            <Logo />
        </header>
    );
};
