import Link from "next/link";

export default function Menuitem({title , address , Icon})
{
    return(
        <Link href={address} className="hover:text-cyan-500">
            <Icon className=" text-2xl"/>
            {/* // hiden refers jab screen size k hisab se title dikehga aur ni dikhega */}
            <p className="uppercase hidden sm:inline">{title}</p>
        </Link>
    )
}