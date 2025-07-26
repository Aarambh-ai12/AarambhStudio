import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ClassesCard = ({ classes }) => {
  return (
    <div className="w-full my-10 flex flex-col md:flex-row justify-around items-center flex-wrap gap-6">
      {classes.map((item, index) => (
        <div
          key={item.title + index}
          className="w-[80%] md:w-[30%] min-h-[320px] flex"
        >
          <Card className="flex flex-col justify-between w-full bg-white/10 backdrop-blur-md text-white shadow-xl p-4">
            <CardHeader>
              <CardTitle className="text-green-400 text-2xl font-semibold">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc list-inside space-y-1">
                {item.types.map((type, idx) => (
                  <li key={idx}>{type}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ClassesCard;
