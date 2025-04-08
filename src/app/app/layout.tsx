import { AppSidebar } from "@/components/AppSidebar";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <div className="flex h-full w-full flex-col">{children}</div>
            </SidebarInset>
        </SidebarProvider>
    );
}
