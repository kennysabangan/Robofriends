interface CardProps {
    id: number,
    name: string,
    email: string
}

const Card = (props: CardProps) => {
    const { id, name, email } = props;

    return (
        <div className="bg-teal-300 inline-block rounded-lg p-1 m-2 transform scale-100 transition-all hover:scale-105 drop-shadow-xl">
            <img alt='robot' width="250px" src={`https://robohash.org/${id}?300x300`} draggable='false' />
            <div className="flex flex-col items-center my-4">
                <h2 className="text-lg font-bold">{name}</h2>
                <p>{email}</p>
            </div>
        </div>
     );
}

export default Card;