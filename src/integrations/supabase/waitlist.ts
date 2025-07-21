import { supabase } from './client';

export interface WaitlistEntry {
  id?: string;
  name: string;
  email: string;
  company: string;
  sales_reps?: string;
  role?: string;
  crm?: string;
  created_at?: string;
}

export async function submitWaitlistEntry(data: Omit<WaitlistEntry, 'id' | 'created_at'>) {
  try {
    console.log('Submitting waitlist entry:', data);
    console.log('Supabase client:', supabase);
    
          const { data: result, error } = await supabase
        .from('waitlist')
        .insert([{
          name: data.name,
          email: data.email,
          company: data.company,
          sales_reps: data.sales_reps || null,
          role: data.role || null,
          crm: data.crm || null
        }])
        .select();

    console.log('Supabase response:', { result, error });

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    console.log('Waitlist entry submitted successfully:', result);
    return result;
  } catch (error) {
    console.error('Error submitting waitlist entry:', error);
    throw error;
  }
} 