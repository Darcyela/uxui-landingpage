/*
  # Create UX + AI Platform Tables

  This migration creates the database schema for the UX + AI process landing page.

  ## New Tables

  ### `timeline_steps`
  Stores the sequential steps of the UX + AI workflow process.
  - `id` (uuid, primary key) - Unique identifier
  - `stage` (text) - Name of the workflow stage (e.g., "Descubrimiento")
  - `description` (text) - Detailed description of what happens in this stage
  - `tools` (text[]) - Array of tools used (e.g., ["Bolt", "Figma", "ChatGPT"])
  - `avg_duration_minutes` (int) - Average time spent in this stage
  - `output` (text) - Deliverable or output from this stage
  - `order_index` (int) - Sequential order for display

  ### `iterations_tokens`
  Tracks token usage across different iterations of a project.
  - `id` (uuid, primary key) - Unique identifier
  - `iteration_index` (int) - Iteration number (1, 2, 3, etc.)
  - `tokens_input` (bigint) - Input tokens consumed
  - `tokens_output` (bigint) - Output tokens generated
  - `tokens_total` (bigint, generated) - Automatically calculated total
  - `notes` (text, nullable) - Optional notes about the iteration

  ### `metrics`
  Stores high-level performance metrics for the UX + AI process.
  - `id` (uuid, primary key) - Unique identifier
  - `time_saved_pct` (numeric) - Percentage of time saved vs traditional process
  - `avg_iterations` (numeric) - Average number of iterations per project
  - `reuse_rate_pct` (numeric) - Percentage of prompt/component reuse
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - Enable Row Level Security (RLS) on all tables
  - Public read-only access for anonymous users
  - Future admin access for writes
*/

-- Create timeline_steps table
CREATE TABLE IF NOT EXISTS timeline_steps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  stage text NOT NULL,
  description text NOT NULL,
  tools text[] NOT NULL,
  avg_duration_minutes int NOT NULL,
  output text NOT NULL,
  order_index int NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create iterations_tokens table
CREATE TABLE IF NOT EXISTS iterations_tokens (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  iteration_index int NOT NULL,
  tokens_input bigint NOT NULL,
  tokens_output bigint NOT NULL,
  tokens_total bigint GENERATED ALWAYS AS (tokens_input + tokens_output) STORED,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Create metrics table
CREATE TABLE IF NOT EXISTS metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  time_saved_pct numeric NOT NULL,
  avg_iterations numeric NOT NULL,
  reuse_rate_pct numeric NOT NULL,
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE timeline_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE iterations_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE metrics ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access for timeline_steps"
  ON timeline_steps
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public read access for iterations_tokens"
  ON iterations_tokens
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public read access for metrics"
  ON metrics
  FOR SELECT
  TO anon
  USING (true);

-- Create policies for authenticated users to read
CREATE POLICY "Authenticated read access for timeline_steps"
  ON timeline_steps
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated read access for iterations_tokens"
  ON iterations_tokens
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated read access for metrics"
  ON metrics
  FOR SELECT
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS timeline_steps_order_idx ON timeline_steps(order_index);
CREATE INDEX IF NOT EXISTS iterations_tokens_iteration_idx ON iterations_tokens(iteration_index);