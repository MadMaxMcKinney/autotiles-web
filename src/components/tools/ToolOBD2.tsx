"use client";

import { Alert, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CircleAlert } from "lucide-react";
import { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import Markdown from "react-markdown";
import { AnimatePresence, motion } from "motion/react";

interface OBD2CodeHistoryEntry {
    id: string;
    title: string;
    key: string;
}

export default function ToolOBD2() {
    const [searchCode, setSearchCode] = useState("");
    const [notFound, setNotFound] = useState<Boolean | undefined>(undefined);
    const [codeOverview, setCodeOverview] = useState<OBD2Code | undefined>(
        undefined,
    );
    const [history, setHistory] = useLocalStorage<OBD2CodeHistoryEntry[]>(
        "obd2History",
        [],
    );
    const truncatedHistory = history.slice(-6).reverse(); // Reverse the order of the last 6 entries

    async function searchOBD2Code() {
        if (searchCode.length > 0) {
            const response = await fetch("/api/obd2?code=" + searchCode);
            if (response.status === 404) {
                setNotFound(true);
                return;
            }
            // Found
            const data = await response.json();
            setCodeOverview(data);
            setNotFound(false);
            setHistory((prevHistory) => {
                return [
                    ...prevHistory,
                    {
                        id: data.id,
                        title: data.title,
                        key: Math.random().toString(36).substring(2, 15),
                    },
                ];
            });
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
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <Card className="mt-8">
                                <CardHeader>
                                    <CardTitle className="flex flex-col gap-2 text-xl">
                                        <Badge variant={"secondary"}>
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
                        </motion.div>
                    )}
                    {notFound && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <Alert className="mt-6" variant={"destructive"}>
                                <CircleAlert className="text-sm" />
                                <AlertTitle>OBD2 code not found</AlertTitle>
                            </Alert>
                        </motion.div>
                    )}
                </div>
            </section>
            {/* Sidebar history */}
            <section className="w-full max-w-md border-l p-6">
                <p className="text-accent-foreground text-sm leading-none font-medium">
                    Recent searches
                </p>
                <div className="mt-4">
                    {history.length <= 0 ? (
                        <p className="text-muted-foreground text-sm">
                            No recent codes, search for a code for it to be
                            added here.
                        </p>
                    ) : (
                        <div className="flex flex-col gap-4">
                            <AnimatePresence>
                                {truncatedHistory.map((item, index) => (
                                    <motion.div
                                        key={item.key}
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            delay: index * 0.1,
                                        }}
                                    >
                                        <Card className="p-4">
                                            <CardHeader className="p-0">
                                                <CardTitle className="flex flex-col gap-2 leading-snug">
                                                    <Badge
                                                        variant={"secondary"}
                                                    >
                                                        {item.id}
                                                    </Badge>
                                                    {item.title}
                                                </CardTitle>
                                            </CardHeader>
                                        </Card>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
