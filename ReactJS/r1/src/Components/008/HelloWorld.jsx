import rand from '../../Functions/rand';
import { useState } from 'react';


function HelloWorld() {

    const [space, setSpace] = useState(0);

    return <h2 onClick={() => setSpace(20 - rand(0, 23))} style={{letterSpacing: space + 'px',
                                                                        transition: 'all 0.7s'}}>Hello World</h2>

}
export default HelloWorld;