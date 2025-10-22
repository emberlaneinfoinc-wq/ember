/*
  # Create Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Full name of the person submitting the form
      - `email` (text) - Email address of the submitter
      - `company` (text, nullable) - Company name if provided
      - `phone` (text, nullable) - Phone number if provided
      - `service` (text, nullable) - Service they're interested in
      - `message` (text) - The message content
      - `created_at` (timestamptz) - Timestamp of when the submission was created

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting submissions (anyone can submit)
    - Add policy for reading submissions (only authenticated admin users)

  3. Important Notes
    - Data integrity is critical - submissions should never be lost
    - Table uses sensible defaults for timestamps
    - RLS is restrictive by default to protect user data
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  service text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
