import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import DataContext from './DataContext';
import randColor from '../../Functions/randColor'

function Brands() {

    const { id } = useParams();
    const { brands } = useContext(DataContext);

    const [data, setData] = useState(null);

    useEffect(() => {
        setData(brands.find(s => s.id === parseInt(id)));
    }, [brands, id])

    if (null === data || typeof data === 'undefined') {
        return null;
    }

    return (
        <h2 style={{color: randColor()}}>{data.title}</h2>
    )
}

export default Brands;