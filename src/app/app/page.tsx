import BreadcrumbTitle from "@/components/BreadcrumbTitle";
import BoltConverterTile from "@/components/tiles/BoltConverterTile";
import OBD2Tile from "@/components/tiles/OBD2Tile";

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
                    <OBD2Tile />
                </div>
            </div>
        </>
    );
}
