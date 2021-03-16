import React, { useEffect, useState } from "react";
import { useRouter } from "next/router"

import TestCompo from "../../components/test/TestCompo"

function Test() {
    const [name, setName] = useState('');
    const router = useRouter();

    const onChange = e => {
        setName(e.target.value);
    }

    useEffect(() => {
        setName(router.query.page)
    },[name])

  return (
    <div>
        <div>test의 test페이지다</div>
        <TestCompo name={name}/>
        <input onChange={onChange} value={name}/>
    </div>
  )
}

export default Test;
