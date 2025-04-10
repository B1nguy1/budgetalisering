import { supabase } from "$lib/supabaseClient.js";
import type { Expense } from "$lib/types.js";


export async function load() {
    const { data } = await supabase.from("expenses").select("*");
    return {
        expenses: (data ?? []) as Expense[],
    };
};