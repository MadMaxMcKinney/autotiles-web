import { SidebarTrigger } from "@/components/ui/sidebar";

export default function BreadcrumbTitle({ title }: { title: string }) {
    return (
        <div className="w-full flex items-center gap-2 p-4 border-b border-sidebar-border">
            <SidebarTrigger />
            <h1 className="text-xl font-medium text-foreground">{title}</h1>
        </div>
    );
}
