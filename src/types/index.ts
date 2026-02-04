// User and Authentication Types
export type UserRole =
    | 'visitor'
    | 'member'
    | 'exec-core'
    | 'exec-finance'
    | 'exec-promo'
    | 'exec-plan'
    | 'exec-equipment'
    | 'exec-external'

export interface Profile {
    id: string
    email: string
    name: string
    student_id?: string
    phone?: string
    department?: string
    avatar_url?: string
    created_at: string
    updated_at: string
}

export interface UserRoleRecord {
    id: string
    user_id: string
    role: UserRole
    position?: string
    granted_at: string
}

// Notice Types
export interface NoticeCategory {
    id: string
    name: string
    slug: string
    color?: string
}

export interface Notice {
    id: string
    title: string
    content: string
    author_id: string
    category_id: string
    visibility: 'public' | 'member' | 'exec'
    status: 'draft' | 'review' | 'published'
    pinned: boolean
    views: number
    published_at?: string
    created_at: string
    updated_at: string
}

// Event Types
export interface Event {
    id: string
    title: string
    description?: string
    event_date: string
    event_time?: string
    location?: string
    organizer_id?: string
    visibility: 'public' | 'member' | 'exec'
    created_at: string
}

// Project Types
export interface Technology {
    id: string
    name: string
    category?: string
}

export interface Project {
    id: string
    title: string
    description?: string
    image_url?: string
    period_start?: string
    period_end?: string
    status: 'planning' | 'active' | 'completed'
    created_at: string
}

// Gallery Types
export interface GalleryCategory {
    id: string
    name: string
    slug: string
}

export interface GalleryImage {
    id: string
    title: string
    description?: string
    image_url: string
    category_id?: string
    uploaded_by?: string
    upload_date: string
    created_at: string
}

// Study Types
export interface Study {
    id: string
    title: string
    description?: string
    period_start?: string
    period_end?: string
    participant_count: number
    created_at: string
}

// Competition Types
export interface Competition {
    id: string
    title: string
    description?: string
    competition_date?: string
    result?: string
    team_name?: string
    created_at: string
}
