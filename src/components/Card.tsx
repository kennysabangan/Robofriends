interface CardProps {
    id: number,
    name: string,
    email: string
}

const Card = (props: CardProps) => {
    const { id, name, email } = props;

    return (
        <div className="bg-teal-300 inline-block rounded-lg p-2 m-2 transform scale-100 transition-all hover:scale-105 drop-shadow-xl">
            <img alt='robot' width="240px" height="300px" src={`https://robohash.org/${id}?240x300`} draggable='false' />
            <div className="flex flex-col items-center my-4">
                <h2 className="text-lg font-bold">{name}</h2>
                <p>{email}</p>
            </div>
        </div>
     );
}

export default Card;