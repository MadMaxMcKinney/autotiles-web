"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, Bolt, CircleAlert } from "lucide-react";
import { useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";

interface OBD2Code {
    id: string;
    value: string;
}

export default function OBD2Tile() {
    const [searchCode, setSearchCode] = useState("");
    const [notFound, setNotFound] = useState<Boolean | undefined>(undefined);
    const [codeOverview, setCodeOverview] = useState<OBD2Code | undefined>(undefined);

    async function searchOBD2Code() {
        if (searchCode.length > 0) {
            const response = await fetch("/api/tiles/obd2?code=" + searchCode);
            if (response.status === 404) {
                setNotFound(true);
                return;
            }
            const data = await response.json();
            setCodeOverview(data);
            setNotFound(false);
        }
    }

    return (
        <Card className="@container">
            <CardHeader>
                <CardTitle>OBD2</CardTitle>
                <CardDescription>Diagnose OBD2 codes, research solutions.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-2">
                    <Input
                        value={searchCode}
                        onChange={(event) => setSearchCode(event.currentTarget.value)}
                        placeholder="Enter OBD2 code"
                        className="w-full"
                        onKeyDown={(e) => {
                            if (e.key == "Enter") searchOBD2Code();
                        }}
                    />
                    <Button onClick={() => searchOBD2Code()}>Search</Button>
                </div>
                {codeOverview && !notFound && (
                    <Alert className="mt-6">
                        <Bolt className="text-sm" />
                        <div className="flex items-center justify-between">
                            <div>
                                <AlertTitle>{codeOverview.value}</AlertTitle>
                                <AlertDescription>{codeOverview.id}</AlertDescription>
                            </div>
                            <MoreInfoDrawer overview={codeOverview} />
                        </div>
                    </Alert>
                )}
                {notFound && (
                    <Alert className="mt-6" variant={"destructive"}>
                        <CircleAlert className="text-sm" />
                        <AlertTitle>OBD2 code not found</AlertTitle>
                    </Alert>
                )}
            </CardContent>
        </Card>
    );
}

function MoreInfoDrawer({ overview }: { overview: OBD2Code }) {
    const markdown = `# ${overview.value}`;

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant={"link"}>
                    Details <ArrowUpRight />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="overflow-y-auto w-full">
                    <div className="max-w-xl py-9 w-full mx-auto">
                        <DrawerHeader>
                            <DrawerTitle className="text-xl">{overview.value}</DrawerTitle>
                            <DrawerDescription>{overview.id}</DrawerDescription>
                            <div className="mt-4 prose prose-sm prose-neutral dark:prose-invert">
                                <Markdown>{markdown}</Markdown>
                            </div>
                        </DrawerHeader>
                        <DrawerFooter>
                            <DrawerClose asChild>
                                <Button variant="outline">Close</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
