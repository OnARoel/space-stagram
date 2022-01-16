import React, { useState } from 'react';
import './App.css';

function Button() {

    const [like, setLike] = useState('Like');
    const [shake, setShake] = useState(false);
    
    const animate = () => {
        setShake(true);
        setTimeout(() => setShake(false), 500);
    }

    function checkState() {
        like === 'Like' ? setLike('Liked ❤️') : setLike('Like');
        animate();
    }
    return (
        <div>
            <button onClick={() => checkState()} className={shake ? `shake` : 'outline'}>{like}</button>
        </div>
    )
}

export default Button