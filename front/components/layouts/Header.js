import React, { useState } from "react";
import { useRouter } from "next/router"
import Link from "next/link"

function Header() {
    const [page, setPage] = useState('');
    const router = useRouter();
    const search = () => {
        console.log(page)
        router.push(page)
    }

    const changeHandler = (e) => {
        setPage(e.target.value)
    }

  return (
    <>
        <div>header 페이지다</div>
        <input  onChange={changeHandler} value={page}/>
        <button onClick={search}>검색</button>
        <div>{page}</div>
        <Link href={'/test'}>test</Link>
        <Link href={'/'}>index</Link>
    </>
  )
}

export default Header;
