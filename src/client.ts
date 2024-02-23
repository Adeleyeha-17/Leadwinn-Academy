
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tqqkxgmzxtvcrpnjyiic.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxcWt4Z216eHR2Y3Jwbmp5aWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1Mjk2MDAsImV4cCI6MjAyNDEwNTYwMH0.hKvBc2G_tiajpZely5JFKK444UgNXHtNSDs7VvJkM7U"
export const supabase = createClient(supabaseUrl, supabaseKey)