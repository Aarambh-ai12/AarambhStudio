import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ClassesCard = ({ classes }) => {
  return (
    <div className="w-full my-10 flex flex-col md:flex-row justify-around items-center">
      {classes.map((item) => (
        <div className="w-[80%] my-1 md:w-[30%]" key={Math.random()}>
          <Card>
            <CardHeader>
              <CardTitle>
                <p className="text-green-900 font-bold">{item.title}</p>
              </CardTitle>
            </CardHeader>
            <CardContent>{item.ageGroup}</CardContent>
            <CardFooter>{item.schedule}</CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ClassesCard;
