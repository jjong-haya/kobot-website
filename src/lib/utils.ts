import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Format date to Korean locale
 */
export function formatDate(date: string | Date): string {
    const d = typeof date === 'string' ? new Date(date) : date
    return d.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })
}

/**
 * Get relative time string (e.g., "2일 전")
 */
export function getRelativeTime(date: string | Date): string {
    const d = typeof date === 'string' ? new Date(date) : date
    const now = new Date()
    const diffInMs = now.getTime() - d.getTime()
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

    if (diffInDays === 0) return '오늘'
    if (diffInDays === 1) return '어제'
    if (diffInDays < 7) return `${diffInDays}일 전`
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}주 전`
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)}개월 전`
    return `${Math.floor(diffInDays / 365)}년 전`
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text: string, length: number): string {
    if (text.length <= length) return text
    return text.slice(0, length) + '...'
}

/**
 * Get initials from name (for avatars)
 */
export function getInitials(name: string): string {
    return name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
}
