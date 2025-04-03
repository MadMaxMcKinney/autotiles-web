"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bolt, CircleAlert } from "lucide-react";
import { useState } from "react";

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
                    // <div className="mt-6 text-base">
                    //     <div className="flex items-start gap-2">
                    //         <div className="flex flex-col gap-1">
                    //             <p className="font-medium leading-none">{codeOverview.value}</p>
                    //             <p className="text-sm text-muted-foreground">{codeOverview.id}</p>
                    //         </div>
                    //     </div>
                    // </div>
                    <Alert className="mt-6">
                        <Bolt className="text-sm" />
                        <AlertTitle>{codeOverview.value}</AlertTitle>
                        <AlertDescription>{codeOverview.id}</AlertDescription>
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
