"use client";

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { GridFour } from "@phosphor-icons/react/dist/ssr";
import { Grid, MessageSquare, Settings } from "lucide-react";
import Link from "next/link";

const sidebarItems = [
    {
        group: "Tiles",
        items: [
            {
                name: "Tiles",
                icon: Grid,
                href: "/app",
            },
        ],
    },
];

const sidebarFooterLinks = [
    {
        name: "Settings",
        icon: Settings,
        href: "/app/settings",
    },
    {
        name: "Feedback",
        icon: MessageSquare,
        href: "/app/feedback",
    },
];

export function AppSidebar() {
    return (
        <Sidebar variant="inset">
            <SidebarHeader>
                <div className="flex items-center gap-2">
                    <GridFour weight="fill" className="text-lg" />
                    <h2 className="text-xl font-bold">Autotiles</h2>
                </div>
            </SidebarHeader>
            <SidebarContent>
                {sidebarItems.map((group) => (
                    <SidebarGroup key={group.group}>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.items.map((item, index) => (
                                    <SidebarMenuItem key={index}>
                                        <SidebarMenuButton asChild isActive={item.href === window.location.pathname}>
                                            <Link href={item.href}>
                                                <item.icon />
                                                <span>{item.name}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    {sidebarFooterLinks.map((item, index) => (
                        <SidebarMenuItem key={index}>
                            <SidebarMenuButton asChild>
                                <Link href={item.href}>
                                    <item.icon />
                                    <span>{item.name}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
