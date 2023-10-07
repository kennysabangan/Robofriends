import Card from "./Card";

interface Robot {
    id: number;
    name: string;
    email: string;
}

const CardList = ({ robots }: { robots: Robot[] }) => {
    return (
        <div>
            {robots.map((robot) => {
                return (
                    <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
                )}
            )}
        </div>
     );
}

export default CardList;