import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type TimelineStep = {
  id: string;
  stage: string;
  description: string;
  tools: string[];
  avg_duration_minutes: number;
  output: string;
  order_index: number;
  created_at: string;
};

export type IterationTokens = {
  id: string;
  iteration_index: number;
  tokens_input: number;
  tokens_output: number;
  tokens_total: number;
  notes: string | null;
  created_at: string;
};

export type Metrics = {
  id: string;
  time_saved_pct: number;
  avg_iterations: number;
  reuse_rate_pct: number;
  updated_at: string;
};
