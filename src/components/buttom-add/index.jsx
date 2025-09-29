import { TouchableOpacity } from "react-native";
import { Plus } from "lucide-react-native";

export default function ButtonAdd() {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="bg-blue-600 w-16 h-16 rounded-full absolute justify-center items-center bottom-6 right-6"
    >
      <Plus size={24} color="#FFF" />
    </TouchableOpacity>
  );
}
