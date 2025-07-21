import { supabase } from './client';

export interface ContactEntry {
  id?: string;
  name: string;
  email: string;
  company: string;
  sales_reps?: string;
  role?: string;
  message: string;
  created_at?: string;
}

export async function submitContactEntry(data: Omit<ContactEntry, 'id' | 'created_at'>) {
  try {
    console.log('Submitting contact entry:', data);
    console.log('Supabase client:', supabase);
    
    const { data: result, error } = await supabase
      .from('contacts')
      .insert([{
        name: data.name,
        email: data.email,
        company: data.company,
        sales_reps: data.sales_reps || null,
        role: data.role || null,
        message: data.message
      }])
      .select();

    console.log('Supabase response:', { result, error });

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    console.log('Contact entry submitted successfully:', result);
    return result;
  } catch (error) {
    console.error('Error submitting contact entry:', error);
    throw error;
  }
} 