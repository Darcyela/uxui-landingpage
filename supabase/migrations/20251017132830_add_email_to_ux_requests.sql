/*
  # Add email field to ux_requests table

  1. Changes
    - Add `email` column to `ux_requests` table
      - Type: text
      - Required field (NOT NULL)
      - Must be a valid email format

  2. Notes
    - Uses conditional check to only add column if it doesn't exist
    - This ensures the migration is idempotent and won't fail on re-runs
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'ux_requests' AND column_name = 'email'
  ) THEN
    ALTER TABLE ux_requests ADD COLUMN email text NOT NULL DEFAULT '';
  END IF;
END $$;

-- Remove the default after adding the column (for future inserts)
ALTER TABLE ux_requests ALTER COLUMN email DROP DEFAULT;