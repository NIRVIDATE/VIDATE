import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cbehmvmhatbvqrtipprs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiZWhtdm1oYXRidnFydGlwcHJzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDI2NTc5OSwiZXhwIjoyMDY1ODQxNzk5fQ.WhSvPIGsWk-s3iaFGs0aeLBd_WEjFD1q5FmwzQCjnoI';

export const supabase = createClient(supabaseUrl, supabaseKey);
