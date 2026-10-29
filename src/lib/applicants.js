import { supabase } from './supabase';

export async function saveAnswer(applicantId, field, value) {
    const { error } = await supabase
        .from('applicants')
        .update({ [field]: value })
        .eq("id", applicantId)

    if (error) {
        console.error(`Could not save ${field} : `, error.message)
    }
}