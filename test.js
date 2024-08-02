const supabase = require("./config/supabase");

async function testConnection() {
  try {
    // Test querying the 'users' table (replace with an actual table in your database)
    const { data, error } = await supabase.from("users").select("*").limit(1);

    if (error) {
      console.error("Error querying Supabase:", error.message);
      return;
    }

    console.log("Successfully connected to Supabase. Data:", data);
  } catch (error) {
    console.error("Unexpected error:", error.message);
  }
}

testConnection();
