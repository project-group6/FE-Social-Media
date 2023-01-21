import logo from "../../assets/profileimg/bot-dev.svg";
import logotwo from "../../assets/profileimg/github.svg"

interface HeadingProps {
    backgroundImg: string;
    userImg: string;
}


export function Heading({ backgroundImg, userImg }: HeadingProps) {
    return (
        <>
            <img src={backgroundImg} className='w-full h-[109px] rounded-t-xl col-start-1 col-end-4 row-start-1 row-end-3' />

            <div className='col-start-1 row-start-2 row-end-4 ml-4'>
                <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" className='bg-zinc-900 rounded-full h-[98px] w-[98px] border-[7px] border-zinc-900' />
            </div>

            <div className='mt-2 col-start-1 row-start-3 row-end-3 ml-20 border-zinc-900 border-[7px] h-[30px] w-[30px] rounded-full bg-[#43b581]' />
            <img src={logo} className='mt-3 mr-10 col-start-3 row-start-3 self-start justify-self-end h-6 w-6' />
            <img src={logotwo} className='mt-3 mr-4 col-start-3 row-start-3 self-start justify-self-end h-6 w-6' />
        </>
    );
}
