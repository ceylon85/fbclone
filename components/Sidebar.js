import { useSession } from "next-auth/client";
import {
  ChevronDownIcon,
  UserGroupIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";

import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const [session, loading] = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      {/* <SidebarRow src={session.user.image} title={session.user.name} /> */}
      <SidebarRow Icon={UsersIcon} title="친구 찾기" />
      <SidebarRow Icon={UserGroupIcon} title="그룹" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="이벤트" />
      <SidebarRow Icon={ClockIcon} title="과거의 오늘" />
      <SidebarRow Icon={BriefcaseIcon} title="채용 정보" />
      <SidebarRow Icon={ChevronDownIcon} title="더 보기" />
    </div>
  );
}

export default Sidebar;
