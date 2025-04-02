import BoltConverterTile from "@/components/tiles/BoltConverterTile";

export default function Page() {
    return (
        <div className="grid grid-cols-2 gap-4 w-full p-4">
            <div className="grid grid-flow-row gap-4">
                <BoltConverterTile />
            </div>
        </div>
    );
}
