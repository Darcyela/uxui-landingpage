/*
  # Create ux_requests table for UX process requests

  1. New Tables
    - `ux_requests`
      - `id` (uuid, primary key, auto-generated)
      - `product` (text, required) - Name of the product
      - `business_unit` (text, required) - Business unit that applies
      - `owner_name` (text, required) - Name of the responsible person
      - `description` (text, required, max 400 chars) - Brief description of the request
      - `status` (text, default 'nuevo') - Status of the request
      - `created_at` (timestamptz, default now()) - Timestamp of creation

  2. Security
    - Enable RLS on `ux_requests` table
    - Add policy for anonymous users to INSERT only (no reads, updates, or deletes from client)
    - INSERT is public to allow stakeholders to submit requests without authentication
    - No SELECT policy for anonymous users to prevent data exposure
*/

CREATE TABLE IF NOT EXISTS ux_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product text NOT NULL,
  business_unit text NOT NULL,
  owner_name text NOT NULL,
  description text NOT NULL CHECK (char_length(description) <= 400),
  status text NOT NULL DEFAULT 'nuevo',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE ux_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "allow_public_insert_ux_requests"
  ON ux_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "allow_public_select_ux_requests_none"
  ON ux_requests
  FOR SELECT
  TO anon
  USING (false);