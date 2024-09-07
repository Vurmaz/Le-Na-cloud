import { FaChartLine, FaHeart, FaShoppingCart, FaSlack, FaLeaf, FaComments } from "react-icons/fa";
import { MdOutlinePersonSearch } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { BsFillBarChartFill } from "react-icons/bs";
import { TbHexagonLetterMFilled } from "react-icons/tb";
import { IoMdGlobe } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import { CiStar } from "react-icons/ci";


const ICONS = {
  FaChartLine: FaChartLine,
  FaHeart: FaHeart,
  FaSlack:FaSlack,
  FaShoppingCart:FaShoppingCart,
  MdOutlinePersonSearch:MdOutlinePersonSearch,
  GiMaterialsScience:GiMaterialsScience,
  BsFillBarChartFill:BsFillBarChartFill,
  TbHexagonLetterMFilled:TbHexagonLetterMFilled,
  IoMdGlobe:IoMdGlobe,
  RiTeamLine:RiTeamLine,
  CiStar:CiStar,
  FaComments:FaComments
}

export default function IconRenderer({ iconName, color, ...props }) {
  const IconComponent = ICONS[iconName]

  if (!IconComponent) {
    return null
  }

  return <IconComponent style={{ color:`var(--${color})`}} {...props} />
}