export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      activity_logs: {
        Row: {
          action: string
          actor_id: string | null
          changes: Json
          created_at: string
          entity: string
          entity_id: string | null
          id: string
        }
        Insert: {
          action: string
          actor_id?: string | null
          changes?: Json
          created_at?: string
          entity: string
          entity_id?: string | null
          id?: string
        }
        Update: {
          action?: string
          actor_id?: string | null
          changes?: Json
          created_at?: string
          entity?: string
          entity_id?: string | null
          id?: string
        }
        Relationships: []
      }
      author_submissions: {
        Row: {
          admin_note: string
          amount: number
          author_name: string
          biography: string
          country: string
          cover_path: string
          created_at: string
          description: string
          email: string
          genre: string
          id: string
          manuscript_path: string
          package: string
          payment_status: string
          purchase_url: string | null
          status: string
          synopsis: string
          title: string
          user_id: string
        }
        Insert: {
          admin_note?: string
          amount: number
          author_name: string
          biography?: string
          country?: string
          cover_path?: string
          created_at?: string
          description?: string
          email: string
          genre: string
          id?: string
          manuscript_path?: string
          package: string
          payment_status?: string
          purchase_url?: string | null
          status?: string
          synopsis: string
          title: string
          user_id: string
        }
        Update: {
          admin_note?: string
          amount?: number
          author_name?: string
          biography?: string
          country?: string
          cover_path?: string
          created_at?: string
          description?: string
          email?: string
          genre?: string
          id?: string
          manuscript_path?: string
          package?: string
          payment_status?: string
          purchase_url?: string | null
          status?: string
          synopsis?: string
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "author_submissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      book_ratings: {
        Row: {
          book_id: string
          id: string
          rating: number
          user_id: string
        }
        Insert: {
          book_id: string
          id?: string
          rating: number
          user_id: string
        }
        Update: {
          book_id?: string
          id?: string
          rating?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "book_ratings_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "book_engagement"
            referencedColumns: ["book_id"]
          },
          {
            foreignKeyName: "book_ratings_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "book_ratings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      books: {
        Row: {
          author: string
          benchmarks: Json
          cover_url: string
          created_at: string
          description: string
          discussion_prompts: Json
          eligible: boolean
          featured: boolean
          format: string
          genre: string
          id: string
          isbn: string | null
          publication_date: string | null
          published: boolean
          purchase_url: string | null
          slug: string
          source: string
          subgenre: string
          synopsis: string
          title: string
          total_pages: number
        }
        Insert: {
          author: string
          benchmarks?: Json
          cover_url?: string
          created_at?: string
          description?: string
          discussion_prompts?: Json
          eligible?: boolean
          featured?: boolean
          format?: string
          genre?: string
          id?: string
          isbn?: string | null
          publication_date?: string | null
          published?: boolean
          purchase_url?: string | null
          slug: string
          source?: string
          subgenre?: string
          synopsis?: string
          title: string
          total_pages?: number
        }
        Update: {
          author?: string
          benchmarks?: Json
          cover_url?: string
          created_at?: string
          description?: string
          discussion_prompts?: Json
          eligible?: boolean
          featured?: boolean
          format?: string
          genre?: string
          id?: string
          isbn?: string | null
          publication_date?: string | null
          published?: boolean
          purchase_url?: string | null
          slug?: string
          source?: string
          subgenre?: string
          synopsis?: string
          title?: string
          total_pages?: number
        }
        Relationships: []
      }
      community_events: {
        Row: {
          book_id: string | null
          created_at: string
          description: string
          ends_at: string | null
          id: string
          kind: string
          options: Json
          published: boolean
          starts_at: string | null
          title: string
        }
        Insert: {
          book_id?: string | null
          created_at?: string
          description?: string
          ends_at?: string | null
          id?: string
          kind: string
          options?: Json
          published?: boolean
          starts_at?: string | null
          title: string
        }
        Update: {
          book_id?: string | null
          created_at?: string
          description?: string
          ends_at?: string | null
          id?: string
          kind?: string
          options?: Json
          published?: boolean
          starts_at?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "community_events_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "book_engagement"
            referencedColumns: ["book_id"]
          },
          {
            foreignKeyName: "community_events_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
        ]
      }
      community_settings: {
        Row: {
          key: string
          value: Json
        }
        Insert: {
          key: string
          value?: Json
        }
        Update: {
          key?: string
          value?: Json
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      contribution_likes: {
        Row: {
          contribution_id: string
          user_id: string
        }
        Insert: {
          contribution_id: string
          user_id: string
        }
        Update: {
          contribution_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contribution_likes_contribution_id_fkey"
            columns: ["contribution_id"]
            isOneToOne: false
            referencedRelation: "contributions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contribution_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      contributions: {
        Row: {
          body: string
          book_id: string | null
          created_at: string
          id: string
          kind: string
          parent_id: string | null
          published: boolean
          source: string
          title: string
          user_id: string | null
        }
        Insert: {
          body: string
          book_id?: string | null
          created_at?: string
          id?: string
          kind?: string
          parent_id?: string | null
          published?: boolean
          source?: string
          title?: string
          user_id?: string | null
        }
        Update: {
          body?: string
          book_id?: string | null
          created_at?: string
          id?: string
          kind?: string
          parent_id?: string | null
          published?: boolean
          source?: string
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contributions_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "book_engagement"
            referencedColumns: ["book_id"]
          },
          {
            foreignKeyName: "contributions_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contributions_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "contributions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contributions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      event_participants: {
        Row: {
          choice: number | null
          created_at: string
          event_id: string
          goal: number
          user_id: string
        }
        Insert: {
          choice?: number | null
          created_at?: string
          event_id: string
          goal?: number
          user_id: string
        }
        Update: {
          choice?: number | null
          created_at?: string
          event_id?: string
          goal?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "event_participants_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "community_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_participants_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      good_book_votes: {
        Row: {
          book_id: string
          id: string
          user_id: string
        }
        Insert: {
          book_id: string
          id?: string
          user_id: string
        }
        Update: {
          book_id?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "good_book_votes_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "book_engagement"
            referencedColumns: ["book_id"]
          },
          {
            foreignKeyName: "good_book_votes_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "good_book_votes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          body: string
          created_at: string
          id: string
          read: boolean
          title: string
          user_id: string
        }
        Insert: {
          body?: string
          created_at?: string
          id?: string
          read?: boolean
          title: string
          user_id: string
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          read?: boolean
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          biography: string
          country: string | null
          created_at: string
          display_name: string
          id: string
          interests: string[]
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          biography?: string
          country?: string | null
          created_at?: string
          display_name?: string
          id: string
          interests?: string[]
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          biography?: string
          country?: string | null
          created_at?: string
          display_name?: string
          id?: string
          interests?: string[]
          username?: string | null
        }
        Relationships: []
      }
      reader_shelves: {
        Row: {
          book_id: string
          category: string
          completed_at: string | null
          current_page: number
          id: string
          started_at: string | null
          total_pages: number
          updated_at: string
          user_id: string
        }
        Insert: {
          book_id: string
          category?: string
          completed_at?: string | null
          current_page?: number
          id?: string
          started_at?: string | null
          total_pages?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          book_id?: string
          category?: string
          completed_at?: string | null
          current_page?: number
          id?: string
          started_at?: string | null
          total_pages?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reader_shelves_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "book_engagement"
            referencedColumns: ["book_id"]
          },
          {
            foreignKeyName: "reader_shelves_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reader_shelves_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      reading_history: {
        Row: {
          book_id: string
          category: string
          current_page: number
          id: string
          recorded_at: string
          total_pages: number
          user_id: string
        }
        Insert: {
          book_id: string
          category: string
          current_page: number
          id?: string
          recorded_at?: string
          total_pages: number
          user_id: string
        }
        Update: {
          book_id?: string
          category?: string
          current_page?: number
          id?: string
          recorded_at?: string
          total_pages?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reading_history_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "book_engagement"
            referencedColumns: ["book_id"]
          },
          {
            foreignKeyName: "reading_history_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reading_history_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      book_engagement: {
        Row: {
          book_id: string | null
          completed: number | null
          discussions: number | null
          likes: number | null
          participants: number | null
          rating: number | null
          ratings: number | null
          reading: number | null
          votes: number | null
        }
        Insert: {
          book_id?: string | null
          completed?: never
          discussions?: never
          likes?: never
          participants?: never
          rating?: never
          ratings?: never
          reading?: never
          votes?: never
        }
        Update: {
          book_id?: string | null
          completed?: never
          discussions?: never
          likes?: never
          participants?: never
          rating?: never
          ratings?: never
          reading?: never
          votes?: never
        }
        Relationships: []
      }
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
