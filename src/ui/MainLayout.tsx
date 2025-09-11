import type {ReactNode} from "react";

type MainLayoutProps = {
    children: ReactNode;
};

const MainLayout = ({children}: MainLayoutProps) => {
    return (
        <div className='max-w-[1377px] px-[55px] ml-auto mr-auto'>
            {children}
        </div>
    );
};

export default MainLayout;