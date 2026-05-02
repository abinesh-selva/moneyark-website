import { useState } from 'react';
import { supabase } from '../lib/supabase';

export function useRating() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function submitRating(rating) {
    if (submitted || submitting) return;
    setSubmitting(true);
    await supabase.from('app_ratings').insert({ rating });
    setSubmitted(true);
    setSubmitting(false);
  }

  return { submitRating, submitted, submitting };
}
