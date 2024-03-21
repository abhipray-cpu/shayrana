import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cqxbeeihsrudushcocci.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxeGJlZWloc3J1ZHVzaGNvY2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NjMxMTYsImV4cCI6MjAyNjMzOTExNn0.a4aHVcpzeXQQY15ZbV79xMilSPTKq2F6ky8b-IQrRrA'
export const supabase = createClient(supabaseUrl, supabaseKey)
