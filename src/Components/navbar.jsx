export default function Navbar() {
    return(
        <>
        <div className="navbar h-14 bg-green-200 p-3 m-2 rounded-md overflow-hidden">
            <div className="links flex gap-10 justify-start ml-20">
                <a className="text-xl  hover:text-red-500 " href="">Home</a>
                <a className="text-xl  hover:text-red-500" href="">About us</a>
            </div>
        </div>
        </>
    )
}