import InfoCard from "../components/ui/InfoCard";
import { MdPeople } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { IoCarSport } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import BarChart from "../components/charts/BarChat";
import PieChart from "../components/charts/PieChart";
import SalesPeopleTable from "../components/Table";

const Dashboard = () => {
  return (
    <div className="w-full mt-10">
      <div className="flex justify-between">
        <InfoCard
          text="Users"
          bg="bg-teal-500"
          icon={<MdPeople />}
          value="10"
        />
        <InfoCard
          text="Vendors"
          bg="bg-yellow-500"
          icon={<IoMdPerson />}
          value="25"
        />
        <InfoCard
          text="Cars"
          bg="bg-green-500"
          icon={<IoCarSport />}
          value="40"
        />
        <InfoCard
          text="Transactions"
          bg="bg-red-500"
          icon={<GrTransaction />}
          value="361,900"
        />
      </div>
      <div className="mt-10 flex gap-5 h-[300px]">
        <BarChart />
        <PieChart />
      </div>
      <div className="mt-10">
        <SalesPeopleTable />
      </div>
    </div>
  );
};

export default Dashboard;
