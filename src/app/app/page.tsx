import BreadcrumbTitle from "@/components/BreadcrumbTitle";
import BoltConverterTile from "@/components/tiles/BoltConverterTile";
import ToolOBD2 from "@/components/tools/ToolOBD2";

export default function Page() {
    return (
        <>
            <BreadcrumbTitle title="Tiles" />
            <div className="grid grid-cols-2 gap-4 w-full p-8 items-start">
                {/* Col */}
                <div className="grid grid-flow-row gap-4">
                    <BoltConverterTile />
                </div>
                {/* Col */}
                <div className="grid grid-flow-row gap-4">
                    <ToolOBD2 />
                </div>
            </div>
        </>
    );
}
