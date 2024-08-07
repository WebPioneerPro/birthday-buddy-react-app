const People = ({image, name, age}) => {
    return (
        <li className='person'>
            <img src={image} alt="name" className='img' />
            <div>
                <h4>{name}</h4>
                <p>{age} years</p>
            </div>
        </li>
    )
}

export default People
