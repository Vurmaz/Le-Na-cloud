import React, { memo, lazy, Suspense } from "react";

const ICONS = {
  FaChartLine: lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaChartLine }))),
  FaHeart: lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaHeart }))),
  FaSlack: lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaSlack }))),
  FaShoppingCart: lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaShoppingCart }))),
  MdOutlinePersonSearch: lazy(() => import("react-icons/md").then((mod) => ({ default: mod.MdOutlinePersonSearch }))),
  GiMaterialsScience: lazy(() => import("react-icons/gi").then((mod) => ({ default: mod.GiMaterialsScience }))),
  BsFillBarChartFill: lazy(() => import("react-icons/bs").then((mod) => ({ default: mod.BsFillBarChartFill }))),
  TbHexagonLetterMFilled: lazy(() => import("react-icons/tb").then((mod) => ({ default: mod.TbHexagonLetterMFilled }))),
  IoMdGlobe: lazy(() => import("react-icons/io").then((mod) => ({ default: mod.IoMdGlobe }))),
  RiTeamLine: lazy(() => import("react-icons/ri").then((mod) => ({ default: mod.RiTeamLine }))),
  CiStar: lazy(() => import("react-icons/ci").then((mod) => ({ default: mod.CiStar }))),
  FaComments: lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaComments }))),
  FaLightbulb: lazy(() => import("react-icons/fa").then((mod) => ({ default: mod.FaLightbulb }))),
  GrOptimize: lazy(() => import("react-icons/gr").then((mod) => ({ default: mod.GrOptimize }))),
  MdSelfImprovement: lazy(() => import("react-icons/md").then((mod) => ({ default: mod.MdSelfImprovement }))),
  TbUserScreen: lazy(() => import("react-icons/tb").then((mod) => ({ default: mod.TbUserScreen }))),
};

export default memo(function IconRenderer({ iconName, color, ...props }) {
  const IconComponent = ICONS[iconName]

  if (!IconComponent) {
    return null
  }

    return (
    <Suspense fallback={<div className="w-8 h-8 rounded-lg text-grey"></div>}>
      <IconComponent style={{ color: `var(--${color})` }} {...props} />
    </Suspense>
  );
})