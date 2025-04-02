"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Combobox } from "@/components/ui/combobox";
import { ArrowsLeftRight } from "@phosphor-icons/react";
import { useState } from "react";

interface MetricBolt {
    size: string;
    diameter_mm: number;
    thread_pitch_mm: number;
    wrench_size_mm: number;
    matching_bolt: string; // SAE size string
}

interface SAEBolt {
    size: string;
    diameter_in: number;
    threads_per_inch: number;
    wrench_size_in: string;
    matching_bolt: string; // Metric size string
}

const bolts: { metric: MetricBolt[]; sae: SAEBolt[] } = {
    metric: [
        {
            size: "M4",
            diameter_mm: 4,
            thread_pitch_mm: 0.7,
            wrench_size_mm: 7,
            matching_bolt: "5/32",
        },
        {
            size: "M5",
            diameter_mm: 5,
            thread_pitch_mm: 0.8,
            wrench_size_mm: 8,
            matching_bolt: "3/16",
        },
        {
            size: "M6",
            diameter_mm: 6,
            thread_pitch_mm: 1.0,
            wrench_size_mm: 10,
            matching_bolt: "1/4",
        },
        {
            size: "M8",
            diameter_mm: 8,
            thread_pitch_mm: 1.25,
            wrench_size_mm: 13,
            matching_bolt: "5/16",
        },
        {
            size: "M10",
            diameter_mm: 10,
            thread_pitch_mm: 1.5,
            wrench_size_mm: 17,
            matching_bolt: "3/8",
        },
        {
            size: "M12",
            diameter_mm: 12,
            thread_pitch_mm: 1.75,
            wrench_size_mm: 19,
            matching_bolt: "1/2",
        },
        {
            size: "M14",
            diameter_mm: 14,
            thread_pitch_mm: 2.0,
            wrench_size_mm: 22,
            matching_bolt: "9/16",
        },
        {
            size: "M16",
            diameter_mm: 16,
            thread_pitch_mm: 2.0,
            wrench_size_mm: 24,
            matching_bolt: "5/8",
        },
        {
            size: "M18",
            diameter_mm: 18,
            thread_pitch_mm: 2.5,
            wrench_size_mm: 27,
            matching_bolt: "11/16",
        },
        {
            size: "M20",
            diameter_mm: 20,
            thread_pitch_mm: 2.5,
            wrench_size_mm: 30,
            matching_bolt: "3/4",
        },
        {
            size: "M22",
            diameter_mm: 22,
            thread_pitch_mm: 2.5,
            wrench_size_mm: 32,
            matching_bolt: "7/8",
        },
        {
            size: "M24",
            diameter_mm: 24,
            thread_pitch_mm: 3.0,
            wrench_size_mm: 36,
            matching_bolt: "1",
        },
    ],
    sae: [
        {
            size: "5/32",
            diameter_in: 0.1563,
            threads_per_inch: 32,
            wrench_size_in: "5/16",
            matching_bolt: "M4",
        },
        {
            size: "3/16",
            diameter_in: 0.1875,
            threads_per_inch: 24,
            wrench_size_in: "3/8",
            matching_bolt: "M5",
        },
        {
            size: "1/4",
            diameter_in: 0.25,
            threads_per_inch: 20,
            wrench_size_in: "7/16",
            matching_bolt: "M6",
        },
        {
            size: "5/16",
            diameter_in: 0.3125,
            threads_per_inch: 18,
            wrench_size_in: "1/2",
            matching_bolt: "M8",
        },
        {
            size: "3/8",
            diameter_in: 0.375,
            threads_per_inch: 16,
            wrench_size_in: "9/16",
            matching_bolt: "M10",
        },
        {
            size: "1/2",
            diameter_in: 0.5,
            threads_per_inch: 13,
            wrench_size_in: "3/4",
            matching_bolt: "M12",
        },
        {
            size: "9/16",
            diameter_in: 0.5625,
            threads_per_inch: 12,
            wrench_size_in: "13/16",
            matching_bolt: "M14",
        },
        {
            size: "5/8",
            diameter_in: 0.625,
            threads_per_inch: 11,
            wrench_size_in: "15/16",
            matching_bolt: "M16",
        },
        {
            size: "11/16",
            diameter_in: 0.6875,
            threads_per_inch: 11,
            wrench_size_in: "1-1/16",
            matching_bolt: "M18",
        },
        {
            size: "3/4",
            diameter_in: 0.75,
            threads_per_inch: 10,
            wrench_size_in: "1-1/8",
            matching_bolt: "M20",
        },
        {
            size: "7/8",
            diameter_in: 0.875,
            threads_per_inch: 9,
            wrench_size_in: "1-5/16",
            matching_bolt: "M22",
        },
        {
            size: "1",
            diameter_in: 1.0,
            threads_per_inch: 8,
            wrench_size_in: "1-1/2",
            matching_bolt: "M24",
        },
    ],
};

export default function BoltConverterTile() {
    const [metricValue, setMetricValue] = useState("");
    const metricBolt = bolts.metric.find((b) => b.size === metricValue);
    const [saeValue, setSaeValue] = useState("");
    const saeBolt = bolts.sae.find((b) => b.size === saeValue);

    // Check if the metricValue or saeValue is empty and set the other value accordingly
    function matchBoltSize(boltSize: string) {
        const metricBolt = bolts.metric.find((b) => b.size === boltSize);
        const saeBolt = bolts.sae.find((b) => b.size === boltSize);

        if (metricBolt) {
            setSaeValue(metricBolt.matching_bolt);
        } else if (saeBolt) {
            setMetricValue(saeBolt.matching_bolt);
        }
    }

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
                        values={bolts.metric.map((bolt) => ({ value: bolt.size, label: bolt.size, shortcut: bolt.thread_pitch_mm.toString() + "mm" }))}
                        onChange={(value) => {
                            setMetricValue(value);
                            matchBoltSize(value);
                        }}
                        value={metricValue}
                    />
                    <ArrowsLeftRight className="text-lg text-muted-foreground w-full" />
                    <Combobox
                        prompt="Select SAE..."
                        searchPrompt="Search for SAE bolts"
                        values={bolts.sae.map((bolt) => ({ value: bolt.size, label: bolt.size + " in", shortcut: bolt.threads_per_inch.toString() + "in" }))}
                        onChange={(value) => {
                            setSaeValue(value);
                            matchBoltSize(value);
                        }}
                        value={saeValue}
                    />
                </div>
                {(metricBolt || saeBolt) && (
                    <div className="grid @[450px]:grid-cols-2 gap-4 justify-between mt-4">
                        {metricBolt && (
                            <div className="text-sm text-muted-foreground">
                                <div>
                                    <p className="font-medium">Metric</p>
                                    <p>Diameter: {metricBolt.diameter_mm} mm</p>
                                    <p>Thread Pitch: {metricBolt.thread_pitch_mm} mm</p>
                                    <p>Wrench Size: {metricBolt.wrench_size_mm} mm</p>
                                </div>
                            </div>
                        )}
                        {saeBolt && (
                            <div className="text-sm text-muted-foreground @[450px]:text-right">
                                <div>
                                    <p className="font-medium">SAE</p>
                                    <p>Diameter: {saeBolt.diameter_in} in</p>
                                    <p>Threads per Inch: {saeBolt.threads_per_inch}</p>
                                    <p>Wrench Size: {saeBolt.wrench_size_in} in</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
