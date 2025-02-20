import { Avatar } from '@/components/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/dropdown'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from '@/components/sidebar'
import {
  ArrowRightStartOnRectangleIcon,
  ChevronUpIcon,
  UserIcon,
} from '@heroicons/react/16/solid'
import {
  CalendarDaysIcon,
  HomeIcon,
} from '@heroicons/react/20/solid'

export function CustomSidebar() {
  return (
    <Sidebar className='min-w-[350px]'>
      <SidebarHeader>
        <SidebarItem href="/">
            <HomeIcon />
            <SidebarLabel className="text-lg font-bold">ABA - Artist Booking App</SidebarLabel>
        </SidebarItem>
      </SidebarHeader>
      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/events">
            <CalendarDaysIcon />
            <SidebarLabel>Events</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
      <SidebarFooter>
        <Dropdown>
          <DropdownButton as={SidebarItem}>
            <span className="flex items-center min-w-0 gap-3">
              <Avatar initials='TU' className="size-10" square alt="'" />
              <span className="min-w-0">
                <span className="block font-medium truncate text-sm/5 text-zinc-950 dark:text-white">Test User</span>
                <span className="block font-normal truncate text-xs/5 text-zinc-500 dark:text-zinc-400">
                  test@example.com
                </span>
              </span>
            </span>
            <ChevronUpIcon />
          </DropdownButton>
          <DropdownMenu className="min-w-64" anchor="top start">
            <DropdownItem href="/my-profile">
              <UserIcon />
              <DropdownLabel>My profile</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/logout">
              <ArrowRightStartOnRectangleIcon />
              <DropdownLabel>Sign out</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </SidebarFooter>
    </Sidebar>
  )
}