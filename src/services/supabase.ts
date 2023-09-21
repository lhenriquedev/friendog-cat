import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://mpchhhefieomdpqeylrq.supabase.co'
export const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wY2hoaGVmaWVvbWRwcWV5bHJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQzMDg4MTYsImV4cCI6MjAwOTg4NDgxNn0.KQM1vWPnrPqzt7IG41dIxvtuWsqg4JkMory8jYR9QOU'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
