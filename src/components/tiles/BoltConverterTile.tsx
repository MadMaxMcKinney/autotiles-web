"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Combobox } from "@/components/ui/combobox";
import { ArrowsLeftRight } from "@phosphor-icons/react";

const bolts = {
    metric_bolts: [
        {
            size: "M4",
            diameter_mm: 4,
            thread_pitch_mm: 0.7,
            wrench_size_mm: 7,
            nearest_match: "1/8",
        },
        {
            size: "M5",
            diameter_mm: 5,
            thread_pitch_mm: 0.8,
            wrench_size_mm: 8,
            nearest_match: "3/16",
        },
        {
            size: "M6",
            diameter_mm: 6,
            thread_pitch_mm: 1.0,
            wrench_size_mm: 10,
            nearest_match: "1/4",
        },
        {
            size: "M8",
            diameter_mm: 8,
            thread_pitch_mm: 1.25,
            wrench_size_mm: 13,
            nearest_match: "5/16",
        },
        {
            size: "M10",
            diameter_mm: 10,
            thread_pitch_mm: 1.5,
            wrench_size_mm: 17,
            nearest_match: "3/8",
        },
        {
            size: "M11",
            diameter_mm: 11,
            thread_pitch_mm: 1.5,
            wrench_size_mm: 18,
            nearest_match: "7/16",
        },
        {
            size: "M12",
            diameter_mm: 12,
            thread_pitch_mm: 1.75,
            wrench_size_mm: 19,
            nearest_match: "1/2",
        },
        {
            size: "M14",
            diameter_mm: 14,
            thread_pitch_mm: 2.0,
            wrench_size_mm: 22,
            nearest_match: "9/16",
        },
        {
            size: "M16",
            diameter_mm: 16,
            thread_pitch_mm: 2.0,
            wrench_size_mm: 24,
            nearest_match: "5/8",
        },
        {
            size: "M20",
            diameter_mm: 20,
            thread_pitch_mm: 2.5,
            wrench_size_mm: 30,
            nearest_match: "3/4",
        },
        {
            size: "M22",
            diameter_mm: 22,
            thread_pitch_mm: 2.5,
            wrench_size_mm: 32,
            nearest_match: "7/8",
        },
        {
            size: "M24",
            diameter_mm: 24,
            thread_pitch_mm: 3.0,
            wrench_size_mm: 36,
            nearest_match: "1",
        },
    ],
    sae_bolts: [
        {
            size: "1/4",
            diameter_in: 0.25,
            threads_per_inch: 20,
            wrench_size_in: "7 / 16",
            nearest_match: "M6",
        },
        {
            size: "5/16",
            diameter_in: 0.3125,
            threads_per_inch: 18,
            wrench_size_in: "1 / 2",
            nearest_match: "M8",
        },
        {
            size: "3/8",
            diameter_in: 0.375,
            threads_per_inch: 16,
            wrench_size_in: "9 / 16",
            nearest_match: "M10",
        },
        {
            size: "7/16",
            diameter_in: 0.4375,
            threads_per_inch: 14,
            wrench_size_in: "5 / 8",
            nearest_match: "M11",
        },
        {
            size: "1/2",
            diameter_in: 0.5,
            threads_per_inch: 13,
            wrench_size_in: "3 / 4",
            nearest_match: "M12",
        },
        {
            size: "9/16",
            diameter_in: 0.5625,
            threads_per_inch: 12,
            wrench_size_in: "13 / 16",
            nearest_match: "M14",
        },
        {
            size: "5/8",
            diameter_in: 0.625,
            threads_per_inch: 11,
            wrench_size_in: "15 / 16",
            nearest_match: "M16",
        },
        {
            size: "3/4",
            diameter_in: 0.75,
            threads_per_inch: 10,
            wrench_size_in: "1 1/8",
            nearest_match: "M20",
        },
        {
            size: "7/8",
            diameter_in: 0.875,
            threads_per_inch: 9,
            wrench_size_in: "1 5/16",
            nearest_match: "M22",
        },
        {
            size: "1",
            diameter_in: 1.0,
            threads_per_inch: 8,
            wrench_size_in: "1 1/2",
            nearest_match: "M24",
        },
    ],
};

export default function BoltConverterTile() {
    return (
        <Card className="@container">
            <CardHeader>
                <CardTitle>Bolt size converter</CardTitle>
                <CardDescription>Convert between Metric and SAE bolt sizes</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 @[450px]:grid-cols-[1fr_18px_1fr] items-center gap-4">
                    <Combobox
                        prompt="Select Metric..."
                        searchPrompt="Search for Metric bolts"
                        values={bolts.metric_bolts.map((bolt) => ({ value: bolt.size, label: bolt.size, shortcut: bolt.thread_pitch_mm.toString() + "mm" }))}
                        onChange={(value) => console.log(value)}
                    />
                    <ArrowsLeftRight className="text-lg text-muted-foreground w-full" />
                    <Combobox
                        prompt="Select SAE..."
                        searchPrompt="Search for SAE bolts"
                        values={bolts.sae_bolts.map((bolt) => ({ value: bolt.size, label: bolt.size + " in", shortcut: bolt.threads_per_inch.toString() + "in" }))}
                        onChange={(value) => console.log(value)}
                    />
                </div>
            </CardContent>
        </Card>
    );
}
