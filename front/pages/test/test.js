import React, { useState } from "react";
import TestCompo from "../../components/test/TestCompo"

function Test() {
    const [name, setName] = useState('');

    const onChange = e => {
        setName(e.target.value);
    }

  return (
    <div>
        <div>test의 test페이지다</div>
        <TestCompo name={name}/>
        <input onChange={onChange} value={name}/>
    </div>
  )
}

export default Test;
