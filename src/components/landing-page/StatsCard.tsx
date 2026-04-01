import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export default function StatCards({
    icon: Icon,
    value,
    label,
    hasBorder,
}: {
    icon: LucideIcon
    value: string
    label: string
    hasBorder?: boolean
}) {
    return (
        <div className="space-x-2 border-x-2 border-gray-300 p-2">
            <div className="flex items-center justify-center gap-5 mb-2">
                <Icon className="size-7 text-primary" strokeWidth={1} />
                <p className="text-5xl font-bold">{value}</p>
            </div>
            <p className="text-muted-foreground">{label}</p>
        </div>
    )
}