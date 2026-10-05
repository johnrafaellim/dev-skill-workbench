import type { InertiaLinkProps } from "@inertiajs/react";
import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toUrl(url: NonNullable<InertiaLinkProps["href"]>): string {
    return typeof url === "string" ? url : url.url;
}

/**
 * Converts an ISO date string into a formatted local string.
 * @param isoString The ISO date string (e.g., '2026-10-04T15:15:17.000000Z').
 * @param locale Optional BCP 47 language tag (e.g., 'en-US', 'en-PH'). Defaults to system default.
 * @param options Optional configuration object for date-time formatting.
 */
export function formatIsoString(
    isoString: string,
    locale?: string,
    options?: Intl.DateTimeFormatOptions,
): string {
    const date = new Date(isoString);

    // Guard clause for invalid date strings
    if (isNaN(date.getTime())) {
        return "Invalid Date";
    }

    // Fallback to system default locale if none provided
    return date.toLocaleString(locale || undefined, options);
}
