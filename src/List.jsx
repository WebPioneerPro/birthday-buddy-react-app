import People from "./People"

const List = ({person}) => {
    return (
        <ul>
            {person.map((person) => {
                return <People key={person.id} {...person} />
            })}
        </ul>
    )
}

export default List
