import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://tdafccozapgmppjgzcdc.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkYWZjY296YXBnbXBwamd6Y2RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMzc4NzUsImV4cCI6MjA3MzcxMzg3NX0.A0Dxzf7o8JbpHfyDBGsCnE8CrefGditE522y2BiHT6o'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface EmailSubscription {
  id?: string
  email: string
  created_at?: string
}
