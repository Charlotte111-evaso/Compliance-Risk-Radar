"use client"

import { Home, BarChart3, Lightbulb, Shield } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: BarChart3,
  },
  {
    title: "Insights",
    url: "/insights",
    icon: Lightbulb,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Shield className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">Compliance Risk Radar</span>
            <span className="text-xs text-gray-500">by Charlotte Evason</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-2 text-xs text-gray-500 text-center">Charlotte Evason Portfolio</div>
      </SidebarFooter>
    </Sidebar>
  )
}
