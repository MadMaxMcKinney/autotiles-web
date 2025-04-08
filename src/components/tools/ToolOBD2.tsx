"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Barcode, CircleAlert } from "lucide-react";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function ToolOBD2() {
    const [searchCode, setSearchCode] = useState("");
    const [notFound, setNotFound] = useState<Boolean | undefined>(undefined);
    const [codeOverview, setCodeOverview] = useState<OBD2Code | undefined>(
        undefined,
    );

    async function searchOBD2Code() {
        if (searchCode.length > 0) {
            const response = await fetch("/api/obd2?code=" + searchCode);
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
        <div className="flex w-full flex-1 justify-between gap-4">
            {/* Content */}
            <section className="mx-auto w-full max-w-xl p-6">
                <div className="flex items-center gap-4">
                    <Input
                        value={searchCode}
                        onChange={(event) =>
                            setSearchCode(event.currentTarget.value)
                        }
                        placeholder="Enter OBD2 code"
                        className="w-full"
                        onKeyDown={(e) => {
                            if (e.key == "Enter") searchOBD2Code();
                        }}
                    />
                    <Button onClick={() => searchOBD2Code()}>Search</Button>
                </div>
                <div>
                    {codeOverview && !notFound && (
                        <Card className="mt-8">
                            <CardHeader>
                                <CardTitle className="flex flex-col gap-2 text-xl">
                                    <Badge variant={"secondary"}>
                                        <Barcode />
                                        {codeOverview.id}
                                    </Badge>
                                    {codeOverview.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="prose prose-neutral dark:prose-invert">
                                    <Markdown>
                                        {codeOverview.description}
                                    </Markdown>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                    {notFound && (
                        <Alert className="mt-6" variant={"destructive"}>
                            <CircleAlert className="text-sm" />
                            <AlertTitle>OBD2 code not found</AlertTitle>
                        </Alert>
                    )}
                </div>
            </section>
            {/* Sidebar history */}
            <section className="w-full max-w-md border-l p-6">
                <p className="text-accent-foreground text-sm leading-none font-medium">
                    History
                </p>
                <div>
                    <Card className="mt-4">
                        <CardHeader>
                            <CardTitle className="flex flex-col gap-2">
                                <Badge variant={"secondary"}>
                                    <Barcode />
                                    P0102
                                </Badge>
                                Mass or Volume Air Flow Circuit Low Input
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </div>
            </section>
        </div>
    );
}
